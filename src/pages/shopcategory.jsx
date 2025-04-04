import { useEffect, useState } from 'react';

import './CSS/ShopCategory.css';
import { useGlobalContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {

  const [productCount, setProductCount] = useState(8);
  const [sortBy, setSortBy] = useState('');

  const {all_products} = useGlobalContext();
  const filteredProducts = all_products.filter((product) => props.category === product.category);

  const sortedProducts = filteredProducts.sort((a, b) => {
    if(sortBy === "priceLowHigh"){
      return a.new_price - b.new_price;
    }
    if(sortBy === "priceHighLow"){
      return b.new_price - a.new_price;
    }
    if(sortBy === "nameAZ"){
      return a.name.localeCompare(b.name);
    }
    if(sortBy === "nameZA"){
      return b.name.localeCompare(a.name);
    }
  });

  useEffect(()=>{

    setProductCount(8);

  },[props.category]);

 
  return (
    <section className='px-lg-5 px-md-4 px-0'>
      <div>
        <div className='d-flex justify-content-center'>
          <img className='banner img-fluid'src={props.banner} alt="banner" style={{width:"85%"}} />
        </div>
        
        <div className='d-flex flex-column align-items-center'>
          <div style={{width:"85%"}} className='d-flex justify-content-between py-4'>
            <p><strong>Showing 1-{productCount}</strong> out of {filteredProducts.length} products</p>

            <div className="dropdown"> 
              <a className="btn btn-light border-secondary rounded-pill dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item" href="#" onClick={()=>setSortBy("priceLowHigh")}>Price - Low to High</li>
                <li className="dropdown-item" href="#" onClick={()=>setSortBy("priceHighLow")}>Price - High to Low</li>
                <li className="dropdown-item" href="#" onClick={()=>setSortBy("nameAZ")}>A to Z</li>
                <li className="dropdown-item" href="#" onClick={()=>setSortBy("nameZA")}>Z to A</li>
              </ul>
            </div>

          </div>
          <div className='d-flex justify-content-center flex-wrap gap-lg-4 gap-3'>
          {
            sortedProducts.slice(0,productCount).map(({ id, name, category, image, new_price, old_price }) => (
              <Item 
                key={id} 
                id={id} 
                category={category}
                name={name} 
                image={image} 
                new_price={new_price} 
                old_price={old_price} 
              />
            ))
          }
          </div>
          {
            productCount < sortedProducts.length &&
            <div className='text-center py-4'>
              <button className='btn btn-light rounded-pill border-secondary' onClick={()=>{setProductCount(productCount + 4)}} type='button'>Explore More</button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ShopCategory