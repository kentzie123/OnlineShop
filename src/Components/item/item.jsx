import './Item.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/ShopContext';

function Item({ id, name, category, image, new_price, old_price }) {
  const {setMenu} = useGlobalContext();
  
  return (
    <div key={id} className='card'>
      <Link to={`/product/${id}`} onClick={()=>{window.scrollTo(0,0);setMenu(category)}}><img className="card-img-top img-fluid" src={`/Assets/${image}.png`} alt={image} /></Link> 
        <div className='card-body p-lg-3 p-2'>
            <p className='card-text'>{name}</p>
            <p className='card-text'>
                <span className='me-2 fw-semibold'>${new_price}</span>
                <s className='text-secondary fw-semibold'>${old_price}</s>
            </p>
        </div>
    </div>
  );
}

export default Item;
