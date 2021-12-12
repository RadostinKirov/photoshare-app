import { createUser } from '../../../service/auth';
import { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { addUserInfo } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userClass, setUserClass] = useState('user-inactive');
    const [passClass, setPassClass] = useState('pass-inactive');
    const [repassClass, setRepassClass] = useState('repass-inactive');
    const [passErrorValidation, setPassErrorValidation] = useState('');
    const [repassErrorValidation, setRepassErrorValidation] = useState('');
    const [isMatch, setIsMatch] = useState(true);
    const [isUserValid, setIsUserValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false)
    const [error, setError] = useState(null);



    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');
        const registerData = { username, password };

        if (!isUserValid || !isPassValid) {
            console.log('wrong input info');
            return;
        }

        createUser(registerData)
            .then(res => {
                console.log('res -> ', res);
                addUserInfo(res);
                navigate('/');
            })
            .catch(err => {
                console.log('test')
                setError(err);

                setTimeout(() => {
                    setError('');
                }, 5000);
              
            });



    }

    const onChangeUsername = (e) => {
        const usernameInput = e.target.value;
        setUsername(usernameInput);
        if (usernameInput.length < 5) {
            setUserClass('user-fail');
            setIsUserValid(false);
            console.log('isUserValid -> ', isUserValid);
        } else {
            setUserClass('user-ok');
            setIsUserValid(true);
            console.log('isUserValid -> ', isUserValid);

        }

    }

    const onChangePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        if (passwordInput.length < 6) {
            setPassClass('pass-fail');
            setPassErrorValidation('min 6 symbols');
            setIsMatch(true);
            setIsPassValid(false);
        } else {
            setPassClass('pass-ok');
            setPassErrorValidation('');
            setIsPassValid(false);
            if (repeatPassword) {
                if (repeatPassword != passwordInput) {
                    console.log('passwords dont match')
                    setPassClass('pass-fail');
                    setRepassClass('repass-fail');
                    setIsMatch(false);
                } else {
                    console.log('both passwords match')
                    setPassClass('pass-ok');
                    setRepassClass('repass-ok');
                    setIsMatch(true);
                    setIsPassValid(true);
                }
            }
        }
    };

    const onChangeRepassword = (e) => {
        const repassInput = e.target.value;
        setRepeatPassword(repassInput);

        if (repassInput.length < 6) {
            setRepassClass('repass-fail');
            setRepassErrorValidation('min 6 symbols');
            setIsMatch(true);
            setIsPassValid(false);
        } else {
            setRepassClass('repass-ok');
            setRepassErrorValidation('');
            setIsPassValid(false);
            if (password) {
                if (password != repassInput) {
                    console.log('passwords dont match')
                    setRepassClass('repass-fail');
                    setPassClass('pass-fail');
                    setIsMatch(false);
                } else {
                    console.log('both passwords match')
                    setRepassClass('repass-ok');
                    setPassClass('pass-ok');
                    setIsMatch(true);
                    setIsPassValid(true);
                }
            }

        }
    };

    return (
        <div className="register">
            <form action="" className="register-form" onSubmit={onSubmitHandler}>

                <div className={error ? 'error' : 'hidden'}>
                    <p>{error}</p>
                </div>

                <h1>Register</h1>

                <div className="username-register">
                    <input onChange={onChangeUsername} value={username} type="text" name="username" placeholder="username" />
                    <p className={userClass == 'user-inactive' || userClass == 'user-ok' ? 'hidden' : userClass}>min 5 symbols</p>
                    <i className={userClass + " fas fa-user"}></i>
                </div>

                <div className="password-register">
                    <input onChange={onChangePassword} value={password} type="password" name="password" placeholder="Password" />

                    <p className={passClass == 'pass-inactive' || passClass == 'pass-ok' ? 'hidden' : passClass}>{passErrorValidation}</p>
                    <p className={!isMatch ? 'match-err-shown' : 'hidden'}>both passwords don't match</p>

                    <i className={passClass + " fas fa-key"}></i>
                </div>

                <div className="repass-register">
                    <input onChange={onChangeRepassword} value={repeatPassword} type="password" name="rePass" placeholder="Repeat Password" />

                    <p className={repassClass == 'repass-inactive' || repassClass == 'repass-ok' ? 'hidden' : repassClass}>{repassErrorValidation}</p>
                    <p className={!isMatch ? 'match-err-shown' : 'hidden'}>both passwords don't match</p>

                    <i className={repassClass + " fas fa-key"}></i>
                </div>

                <input type="submit" className="register-btn" />
                <div className="photographer">
                    <img src="./images/photographer1.png" alt="" />
                </div>

            </form>
        </div>
    )
}

export default Register;