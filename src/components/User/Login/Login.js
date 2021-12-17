import { useContext, useState } from "react";
import './Login.css';
import { getUser } from "../../../service/auth";
import AuthContext from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const { addUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userClass, setUserClass] = useState('user-inactive');
    const [passClass, setPassClass] = useState('pass-inactive');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let data = new FormData(e.currentTarget);
        let usernameFormdata = data.get('username');
        let passwordFormData = data.get('password');
        const loginData = { username, password };

        console.log("usernameFormdata -> ", usernameFormdata);
        console.log("usernameFormdata.length -> ", usernameFormdata.length);
        console.log("passwordFormData -> ", passwordFormData);
        console.log("passwordFormData.length -> ", passwordFormData.length);

        if (!usernameFormdata || usernameFormdata.length < 5) {
            console.log('user-invalid');
            setUserClass('user-fail');

        }

        if (!passwordFormData || passwordFormData.length < 6) {
            console.log('password-invalid');
            setPassClass('pass-fail');
        }

        if (usernameFormdata.length >= 5 && passwordFormData.length >= 6) {

            getUser(loginData)
                .then(res => {
                    console.log('res entered')
                    addUserInfo(res);
                    setError(null);
                    navigate('/');
                })
                .catch(err => {
                    setError(err);
                    setUserClass('user-fail');
                    setPassClass('pass-fail');
                    setPassword('');
                    setUsername('');
                    setTimeout(() => {
                        setError('');
                    }, 5000);

                    console.log('Server Error -> ', err);
                });

        }



    }

    const onChangeUsername = (e) => {
        let usernameInput = e.target.value;

        if (usernameInput.length < 5) {
            setUserClass('user-fail');
        } else {
            setUserClass('user-ok')
        }
        setUsername(usernameInput);
    }

    const onChangePassword = (e) => {
        let passwordInput = e.target.value;

        console.log(passwordInput)
        if (passwordInput.length < 6) {

            setPassClass('pass-fail');
        } else {
            setPassClass('pass-ok')
        }
        setPassword(passwordInput);
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmitHandler}>

                <div className={error ? 'error' : 'hidden'}>
                    <p>{error}</p>
                </div>

                <h1>Login</h1>

                <div className="username-login">
                    <input onChange={onChangeUsername} value={username} type="text" name="username" placeholder="username" />
                    <p className={userClass === 'user-inactive' || userClass === 'user-ok' ? 'hidden' : userClass}>min 5 symbols</p>
                    <i className={userClass + " fas fa-user"}></i>
                </div>

                <div className="password-login">
                    <input onChange={onChangePassword} value={password} type="password" name="password" placeholder="password" />
                    <p className={passClass === 'pass-inactive' || passClass === 'pass-ok' ? 'hidden' : passClass}>min 6 symbols</p>
                    <i className={passClass + " fas fa-key"}></i>
                </div>

                <input type="submit" className="login-btn" value="login" />

            </form>
        </div>
    )
}

export default Login;