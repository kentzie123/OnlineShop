import './CartNotification.css';
import checkmark from '/Assets/checkmark.png'


const CartNotification = () => {
  
  return (
    <div className="cart-notification position-fixed top-50 start-50 translate-middle text-white text-center p-4 rounded-1">
        <img style={{height:"60px", width:"60px"}} src={checkmark} alt="check" />
        <p className='fw-semibold mt-3'>Item has been added to your cart</p>
    </div>
  )
}

export default CartNotification