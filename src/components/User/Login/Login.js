import { getUser } from '../../../service/auth';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import './Login.css'
import { useEffect } from 'react/cjs/react.development';


const Login = () => {
    const { addUserInfo } = useContext(AuthContext);
    let [isPassValid, setIsPassValid] = useState('false');
    let [isUserValid, setIsUserValid] = useState('false');
    const navigate = useNavigate();

    let [passIconClass, setPassIconClass] = useState('input-inactive');
    let [userIconClass, setUserIconClass] = useState('input-inactive');
    let [serverError, setSeverError] = useState(null);

    useEffect( () => {

    }, [serverError]);

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
                setSeverError(null);
                navigate('/');
            })
            .catch(err => {
                setSeverError(err);
                setTimeout(() => {
                    setSeverError('');
                }, 5000);
                console.log('Server Error -> ', err);
            });


    }

    const onChangeUsername = (e) => {
        const username = e.target.value

        if (username.length >= 5) {
            setIsUserValid(true);
            setUserIconClass('input-valid');
        } else {
            setIsUserValid(false);
            setUserIconClass('input-invalid');

        }

    }

    const onChangePass = (e) => {
        const pass = e.target.value
        console.log()
        if (pass.length >= 6) {
            setIsPassValid(true);
            setPassIconClass('input-valid');
        } else {
            setIsPassValid(false);
            setPassIconClass('input-invalid');

        }

    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmitHandler}>
                <div className={serverError ? 'error' : 'active'}>
                    <p>{serverError}</p>
                    </div>
                <h1>Login</h1>

                <div className="username-login">
                    <input onChange={onChangeUsername} type="text" name="username" placeholder="username" />
                    <p className={isUserValid ? 'active' : 'inactive'}>min 5 symbols</p>
                    <i className={userIconClass + " fas fa-user"}></i>
                </div>

                <div className="password-login">
                    <input onChange={onChangePass} type="password" name="password" placeholder="password" />
                    <p className={isPassValid && true ? 'active' : 'inactive'}>min 6 symbols</p>
                    <i className={passIconClass + " fas fa-key"}></i>
                </div>

                <input type="submit" className="login-btn" value="login" />

            </form>
        </div>
    )
}

export default Login;