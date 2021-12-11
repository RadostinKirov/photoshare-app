import { createUser } from '../../../service/auth';
import { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const { addUserInfo } = useContext(AuthContext);

    let [userIconClass, setUserIconClass] = useState('register-input-inactive');
    let [passIconClass, setPassIconClass] = useState('register-input-inactive');
    let [repassIconClass, setRepassIconClass] = useState('register-input-inactive');
    let [isUserValid, setIsUserValid] = useState('false');
    let [isPassValid, setIsPassValid] = useState('false');
    let [pass, setPass] = useState(null);
    let [repass, setRepass] = useState(null);
    let [isRepassValid, setIsRepassValid] = useState('false');

    let [passwordsMatch, setPasswordsMatch] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const user = data.get('username');
        const pass = data.get('password');
        const userData = { "username": user, "password": pass };
        createUser(userData)
            .then(res => {
                console.log('res -> ', res);
                addUserInfo(res);
                navigate('/');
            });
    }

    const onChangeUsername = (e) => {
        const user = e.target.value;
        console.log(user);

        if (user.length >= 5) {
            setIsUserValid(true);
            setUserIconClass('input-valid');
        } else {
            setIsUserValid(false);
            setUserIconClass('input-invalid');
        }
    }

    const onChangePass = (e) => {
        const pass = e.target.value;

        setPass('repass ->', pass);

        if (pass.length < 6) {
            setIsPassValid(false);
            setPassIconClass('input-invalid');
        } else {
            console.log('pass -> ', pass);
            console.log('repass -> ', repass);
            setIsPassValid(true);
            setPass(pass);
            setPassIconClass('input-valid');
            if (repass) {
                if (pass == repass) {

                    setPasswordsMatch(true);

                    setPassIconClass('input-valid');
                    setRepassIconClass('input-valid');
                    console.log('if entered')
                } else {
                    setPasswordsMatch(false);
                    setPassIconClass('input-invalid');
                    setRepassIconClass('input-invalid');
                    // setPasswordsMatch(false);
                    console.log('else entered')
                }
            }
        }

    };

    const onChangeRepass = (e) => {
        const repass = e.target.value;

        if (repass.length < 6) {
            setPasswordsMatch(true);
            setIsRepassValid(false);
            setRepassIconClass('input-invalid');
        } else {
            setIsRepassValid(true);
            setRepass(repass);
            setRepassIconClass('input-valid');
            console.log('pass -> ', pass);
            console.log('repass -> ', repass);
            if (pass && pass == repass) {
                setPasswordsMatch(true);
                setPassIconClass('input-valid');
                setRepassIconClass('input-valid');
                console.log('passwords match!!!')
            } else {
                setPasswordsMatch(false);
                setPassIconClass('input-invalid');
                setRepassIconClass('input-invalid');
                console.log('passwords dont match')

            }
        }
    };

    return (
        <div className="register">
            <form action="" className="register-form" onSubmit={onSubmitHandler}>
                <h1>Register</h1>

                <div className="username-register">
                    <input onChange={onChangeUsername} type="text" name="username" placeholder="username" />
                    <p className={isUserValid ? 'register-active' : 'register-inactive'}>min 5 symbols</p>
                    <i className={userIconClass + " fas fa-user"}></i>
                </div>

                <div className="password-register">
                    <input onChange={onChangePass} type="password" name="password" placeholder="Password" />
                    <p className={isPassValid ? 'register-active' : 'register-inactive'}>min 6 symbols</p>
                    <p className={passwordsMatch ? 'register-active' : 'register-inactive'}>both passwords don't match</p>
                    <i className={passIconClass + " fas fa-key"}></i>
                </div>

                <div className="repass-register">
                    <input onChange={onChangeRepass} type="password" name="rePass" placeholder="Repeat Password" />
                    <p className={isRepassValid ? 'register-active' : 'register-inactive'}>min 6 symbols</p>
                    <p className={passwordsMatch ? 'register-active' : 'register-inactive'}>both passwords don't match</p>
                    <i className={repassIconClass + " fas fa-key"}></i>
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