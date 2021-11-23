const Register = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const user = data.get('username');
        const pass = data.get('password');
        const userData = { "username": user, "password": pass};
      
        fetch('http://localhost:3030/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });




    }

    return (
        <div className="register">
            <form action="" className="register-form" onSubmit={onSubmitHandler}>
                <h1>Register</h1>

                <input type="text" name="username" placeholder="username" />

                <input type="password" name="password" placeholder="Password" />

                <input type="password" name="rePass" placeholder="Repeat Password" />

                <input type="submit" className="register-btn" />
                <div className="photographer">
                    <img src="./images/photographer1.png" alt="" />
                </div>

            </form>
        </div>
    )
}
export default Register;