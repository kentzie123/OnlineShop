import './Hero.css';


const Hero = () => {
  return (
    <div className='hero d-flex justify-content-around align-items-center flex-column flex-md-row pt-4 px-md-4 px-1 gap-3'>
       <div className='d-flex flex-column gap-3 w-60'>
            <h5 className='fw-bold m-0'>NEW ARRIVALS ONLY</h5>
            <div>   
                <h1 className='hero-info m-0 fw-semibold' style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>new <span><img src="/Assets/hand_icon.png" alt="handicon" style={{height:"clamp(3rem, 4.5vh, 4.5rem)"}}/></span></h1>
                <h1 className='hero-info m-0 fw-semibold' style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>collections</h1>
                <h1 className='hero-info m-0 fw-semibold' style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>for everyone</h1>
            </div>
            <button className='btn btn-danger rounded-pill mt-4' style={{width:"200px", height:"50px"}} type='button'>Latest Collection <img style={{height:"10px"}} src="/Assets/arrow.png" alt="" /></button>     
       </div>

       <div >
            <img className='img-fluid' src="/Assets/hero_image.png" alt="hero img"/>
       </div>
    </div>
  )
}

export default Hero