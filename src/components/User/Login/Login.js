import {getUser} from '../../../service/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const user = data.get('username');
        const pass = data.get('password');
        const userData = { "username": user, "password": pass };
       try {
            getUser(userData);
            navigate('/');
       }catch
       {
           console.log('Login error')
       }
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