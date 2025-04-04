import data_product from '../../Data/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <section className="p-lg-5">
        <div>
            <h1 className="popular-header text-center">Related Products</h1>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
                {
                    data_product.map((product) => {
                        return (
                            <Item 
                                key={product.id} 
                                id={product.id} 
                                category={product.category}
                                name={product.name} 
                                image={product.image} 
                                new_price={product.new_price} 
                                old_price={product.old_price}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts