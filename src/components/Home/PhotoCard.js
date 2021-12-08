import { Link } from 'react-router-dom';
import './Home';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';



const PhotoCard = ({ photo }) => {
const {userInfo} = useContext(AuthContext);
const isUser = Boolean(userInfo.username.length);

    return (
        <section className="img-card">
            <div className="image">
                <Link to={isUser ? `/details/${photo._id}` : '/login'}>
                    <img src={photo.imageUrl} alt={photo.title + " picture"} />
                </Link>
            </div>
            <h3>{photo.title}</h3>
        </section>
    )
}

export default PhotoCard;