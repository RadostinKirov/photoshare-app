import { getUser } from '../../../service/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const userForm = data.get('username');
        const passForm = data.get('password');
        const userFormData = { "username": userForm, "password": passForm };
        
        getUser(userFormData)
        .then(res => {
            setUser(res);
            console.log('user -> ', user);
            navigate('/');
        });
      
    
    
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmitHandler}>
                <h1>Login</h1>

                <input type="text" name="username" placeholder="username" />

                <input type="password" name="password" placeholder="******" />

                <input type="submit" className="login-btn" value="login" />


            </form>
        </div>
    )
}

export default Login;