import { Link } from 'react-router-dom'
import './CSS/SignUp.css'

const SignUp = () => {
  return (
    <section className='singup-container d-flex justify-content-center p-md-5'> 
        <form className='signup-form row border rounded-2 shadow-lg p-4 gap-4 bg-light'>
            <h2 className='text-center fw-semibold'>Sign Up</h2>

            <div className="form-floating p-0">
                <input type="text" className="form-control border-dark-subtle" id="floatingInput " placeholder="name@example.com"/>
                <label className='ms-2' for="floatingInput">Your Name</label>
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>

            <div className="form-floating p-0">
                <input type="email" className="form-control border-dark-subtle" id="floatingInput " placeholder="name@example.com"/>
                <label className='ms-2' for="floatingInput">Email address</label>
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>

            <div className="form-floating p-0">
                <input type="password" className="form-control border-dark-subtle" id="floatingInput " placeholder="name@example.com"/>
                <label className='ms-2' for="floatingInput">Password</label>
                <div className="valid-feedback">
                    Looks good!
                </div>
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>

            <button className='btn btn-danger' style={{height:"50px"}}>Continue</button>

            <p>Already have an account? <Link className='text-danger fw-semibold' to="/login">Login here</Link></p>
            
            <div className="form-check">
                <input className="form-check-input border-dark-subtle" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required=""/>
                <label className="form-check-label" for="invalidCheck3">
                    By continuing, I agree to the terms of use & privacy policy
                </label>
            </div>
        </form>
    </section>
  )
}

export default SignUp