import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <section className='d-flex justify-content-center align-items-center py-2'>
        <div className='news-container d-flex align-items-center flex-column text-center p-5 rounded-3 shadow-sm' style={{height:"350px"}}>
            <h1 className='fw-semibold' style={{fontSize:"clamp(3rem, 8vh, 4.5rem)"}}>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="news-email-input input-group mb-3 m-auto" style={{width:"80%"}}>
                <input type="text" className="form-control" placeholder="Your Email Adress" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-dark" style={{height:"50px"}} type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter