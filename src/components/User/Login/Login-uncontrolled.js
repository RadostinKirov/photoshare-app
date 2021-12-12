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

    let [passIconClass, setPassIconClass] = useState('login-input-inactive');
    let [userIconClass, setUserIconClass] = useState('login-input-inactive');
    let [defaultPass, setDefaultPass] = useState('');


    let [error, setError] = useState(null);

    useEffect(() => {

    }, [error]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let userForm = data.get('username');
        let passForm = data.get('password');
        const userFormData = { "username": userForm, "password": passForm };
        
        if(userForm && userForm.length<5 ) {
            console.log('user-invalid')
                setUserIconClass('input-invalid');
                return;
        }

        if(passForm && passForm.length<6){
            console.log('password-invalid');
            setPassIconClass('icon-invalid');
            return; 
        }
       

        getUser(userFormData)
            .then(res => {
                console.log('res entered')
                addUserInfo(res);
                setError(null);
                navigate('/');
            })
            .catch(err => {
                setError(err);
             setDefaultPass('12');
             console.log('defaultPass -> ', defaultPass)
                setTimeout(() => {
                    setError('');
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
                
                <div className={error ? 'error' : 'hidden'}>
                    <p>{error}</p>
                </div>

                <h1>Login</h1>

                <div className="username-login">
                    <input onChange={onChangeUsername} type="text" name="username" placeholder="username" />
                    <p className={isUserValid ? 'login-active' : 'login-inactive'}>min 5 symbols</p>
                    <i className={userIconClass + " fas fa-user"}></i>
                </div>

                <div className="password-login">
                    <input onChange={onChangePass} type="password" name="password" placeholder="password"  />
                    <p className={isPassValid && true ? 'login-active' : 'login-inactive'}>min 6 symbols</p>
                    <i className={passIconClass + " fas fa-key"}></i>
                </div>

                <input type="submit" className="login-btn" value="login" />

            </form>
        </div>
    )
}

export default Login;