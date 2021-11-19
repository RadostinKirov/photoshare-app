const Register = () => {
    return (
        <div className="register">
            <form action="" className="register-form">
                <h1>Register</h1>

                <input type="text" placeholder="username" />

                <input type="password" placeholder="Password" />

                <input type="password" placeholder="Repeat Password" />

                <input type="submit" className="register-btn" value="register" />
                <div className="photographer">
                    <img src="./images/photographer1.png" alt="" />
                </div>

            </form>
        </div>
    )
}
export default Register;