const Login = () => {
    return (
        <div className="login">
            <form action="" className="login-form">
                <h1>Login</h1>

                <input type="text" placeholder="username" />

                <input type="password" placeholder="******" />

                <input type="submit" className="login-btn" value="login" />


            </form>
        </div>
    )
}

export default Login;