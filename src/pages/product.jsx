import { useGlobalContext } from '../Context/ShopContext'
import { useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './CSS/Product.css'

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_products} = useGlobalContext();
  const {productId} = useParams();

  const product = all_products.find((item)=> item.id === Number(productId));
  
  const properedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <section>
      <div className='container'>
        <div className='p-4'>
          <nav className='product-bcrumbs' aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link className='text-decoration-none' to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link className='text-decoration-none' to={`/${product.category}s`}>{properedCategory}s</Link></li>
              <li className="breadcrumb-item active">{product.name}</li>
            </ol>
          </nav>
        </div>

        <div>
          <ProductDisplay product={product} />
        </div>
      </div>
      <div>
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Product