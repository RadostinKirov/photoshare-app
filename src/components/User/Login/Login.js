import { getUser } from '../../../service/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';

const Login = () => {
    const { addUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const userForm = data.get('username');
        const passForm = data.get('password');
        const userFormData = { "username": userForm, "password": passForm };


        getUser(userFormData)
            .then(res => {
                console.log('res entered')
                addUserInfo(res);
                navigate('/')
            })
            .catch(err => console.log('Server Error -> ', err)
            );


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