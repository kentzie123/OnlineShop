import footer_logo from '/Assets/logo_big.png';
import instagram_icon from '/Assets/instagram_icon.png';
import pinterest_icon from '/Assets/pinterest_icon.png'
import whatsapp_icon from '/Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <section>
        <div className='text-center py-5 px-1'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <img style={{height:"50px"}} src={footer_logo} alt="businesslogo" />
                <h2 className="fw-semibold m-0">SHOPPIN</h2>
            </div>

            <ul className='list-unstyled d-flex justify-content-center flex-wrap  gap-4 mt-3'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                <img className='border border-light-subtle rounded-3 p-1'style={{cursor:"pointer"}} src={instagram_icon} alt="instagram" />
                <img className='border border-light-subtle rounded-3 p-1'style={{cursor:"pointer"}} src={pinterest_icon} alt="pinterest" />
                <img className='border border-light-subtle rounded-3 p-1'style={{cursor:"pointer"}} src={whatsapp_icon} alt="whatsapp" />
            </div>

            <hr className="m-4 m-lg-5" />
            
            <p>Copyright @2025 - All Right Reserved</p>
        </div>
    </section>
  )
}

export default Footer