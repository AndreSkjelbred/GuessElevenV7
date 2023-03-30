function RegisterForm() {
    return (
        <div className='wrapper register-wrapper'>
            <div className='form-box register'>
                <h2>Registration</h2>
                <form action='#'>
                    <div className='input-box'>
                        <span className='icon'></span>
                        <input type='text' required />
                        <label>Username</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'></span>
                        <input type='email' required />
                        <label>Email</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'></span>
                        <input type='password' required />
                        <label>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox' />
                            I agree to the terms & conditions
                        </label>
                    </div>
                    <button type='submit' className='btn'>
                        Register
                    </button>
                    <div className='login-register'>
                        <p>
                            Already have an account?{" "}
                            <a href='#' className='login-link'>
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;