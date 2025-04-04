import { useState } from 'react';
import './ProductDisplay.css';
import start_icon from '../../../public/Assets/star_icon.png';
import start_empty from '../../../public/Assets/star_dull_icon.png';
import product_ratings from '../../Data/product_ratings';
import { useGlobalContext } from '../../Context/ShopContext';
import Description from '../DescriptionBox/Description';
import CartNotification from '../CartNotification/CartNotification';

const ProductDisplay = (props) => {
    const { cart, setCart, addToCartNotif, setAddToCartNotif } = useGlobalContext();

    const [productSize, setProductSize] = useState('');
    const [showSizeWarning, setShowSizeWarning] = useState(false);

    const fixedcateg = props.product.category.charAt(0).toUpperCase() + props.product.category.slice(1);

    const filteredProductRating = product_ratings.filter(product => product.productID === props.product.id);
    const totalRating = filteredProductRating.reduce((acc, item) => acc + item.rate, 0);
    const avgRating = filteredProductRating.length > 0 ? totalRating / filteredProductRating.length : 0;

    const addToCart = (addedProduct, size) => {
        if (!size) {
            setShowSizeWarning(true);
            setTimeout(() => setShowSizeWarning(false), 2000);
            return;
        }

        const toAddProduct = {
            ...addedProduct,
            quantity: 1,
            size: size,
            total: addedProduct.new_price
        };

        const findProduct = cart.find((item) => item.id === toAddProduct.id && item.size === toAddProduct.size);

        if (findProduct) {
            const updatedCart = cart.map((item) => {
                if (item.id === findProduct.id) {
                    return { ...item, quantity: item.quantity + 1, total: item.new_price + findProduct.new_price };
                } else {
                    return item;
                }
            });

            setCart(updatedCart);
        } else {
            setCart([toAddProduct, ...cart]);
        }

        showAddToCartNotification();
    };

    function showAddToCartNotification() {
        setAddToCartNotif(true);
        setTimeout(() => setAddToCartNotif(false), 1000);
    }

    return (
        <div>
            <div className='container d-flex flex-column flex-md-row gap-4'>
                <div className='thumbnail-container d-flex gap-lg-3 gap-2'>
                    <div className='product-thumbnail-container d-flex gap-2 overflow-scroll'>
                        {[...Array(7)].map((_, index) => (
                            <img key={index} className="product-thumbnail rounded img-fluid" style={{ maxHeight: "120px" }} src={`/Assets/${props.product.image}.png`} alt={props.product.image} />
                        ))}
                    </div>
                    <img className="product-main-img rounded img-fluid" src={`/Assets/${props.product.image}.png`} alt={props.product.image} />
                </div>

                <div className='product-dispaly-right d-flex flex-column gap-3 px-3'>
                    <div>
                        <h3 className='text-wrap'>{props.product.name}</h3>
                        <div className='d-flex'>
                            <div>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <img key={num} src={avgRating >= num ? start_icon : start_empty} alt="star" />
                                ))}
                            </div>
                            <p className='ms-2'>({filteredProductRating.length === 0 ? "No reviews yet" : filteredProductRating.length})</p>
                        </div>
                    </div>

                    <div>
                        <h5>
                            <strong><s className='text-secondary'>${props.product.old_price}</s></strong>
                            <strong className='text-danger ms-2'>${props.product.new_price}</strong>
                        </h5>
                    </div>

                    <p>{props.product.description}</p>

                    <div className='fw-bold text-secondary'>Select Size</div>

                    <div>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => setProductSize(size)}
                                className={`product-size-btn btn fw-medium border m-1 ${productSize === size ? 'btn-secondary' : 'btn-light'}`}
                            >
                                {size.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <button onClick={() => addToCart(props.product, productSize)} className='btn btn-danger' style={{ height: '50px' }} type='button'>
                        ADD TO CART
                    </button>

                    <div>
                        <div><strong>Category</strong>: {fixedcateg}, T-shirt, Crop Top</div>
                        <div><strong>Tags</strong>: Modern, Latest</div>
                    </div>
                </div>
            </div>

            <Description categ={props.product.category} />

            {addToCartNotif && <CartNotification />}

            {showSizeWarning && (
                <div className="position-fixed top-50 start-50 translate-middle bg-warning text-dark p-3 rounded shadow-lg" style={{ zIndex: 1050 }}>
                    <strong>Please choose a size</strong>
                </div>
            )}
        </div>
    );
}

export default ProductDisplay;
