import { Link } from 'react-router-dom'
import './CSS/SignUp.css'

const LoginSignup = () => {
  return (
    <section className='singup-container d-flex justify-content-center p-md-5'> 
        <form className='signup-form row border rounded-2 shadow-lg p-4 gap-4 bg-light'>
            <h2 className='text-center fw-semibold'>Login</h2>

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

            <div>
              <p>Don't have an account? <Link className='text-danger fw-semibold' to="/signup">Signup here</Link></p>
              <p>Forgot <Link className='text-danger fw-semibold' to="/signup">Email / Password?</Link></p>
            </div>
            
        </form>
    </section>
  )
}

export default LoginSignup