import { Link } from 'react-router-dom';
import './Home';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';



const PhotoCard = ({ game }) => {
const {userInfo} = useContext(AuthContext);
const isUser = Boolean(userInfo.username.length);

    return (
        <section className="img-card">
            <div className="image">
                <Link to={isUser ? `/details/${game._id}` : '/login'}>
                    <img src={game.imageUrl} alt="" />
                </Link>
            </div>
            <h3>{game.title}</h3>
        </section>
    )
}

export default PhotoCard;