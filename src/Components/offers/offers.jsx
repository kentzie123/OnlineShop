import './Offers.css';

const Offers = () => {
  return (
    <section className='d-flex justify-content-center align-items-center py-2'>
        <div className='offers-container d-flex justify-content-around align-items-center flex-column flex-md-row gap-3 px-2 py-4 rounded-3 shadow-sm'>
            <div>
                <h1 className="fw-semibold" style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>Exclusive</h1>
                <h1 className="fw-semibold" style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>Offers For You</h1>
                <p className='fw-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='btn btn-danger rounded-pill' style={{width:"150px", height:"50px"}}>Check Now</button>
            </div>
            <img className='img-fluid' src="/Assets/exclusive_image.png" alt="exclusive_image" />
        </div>
    </section>
  )
}

export default Offers