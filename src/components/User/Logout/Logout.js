import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../contexts/AuthContext";
import { logout } from '../../../service/auth';


const Logout = () => {
    const navigate = useNavigate();
    const info = useContext(AuthContext);
    const { token, id } = info.userInfo;
    

    useEffect(() => {
        logout({ token, id })
            .then(() => {
                info.logout();
                navigate('/');
            })

    }, []);

    return null;
}

export default Logout;