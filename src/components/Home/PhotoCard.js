import { Link } from 'react-router-dom'
const PhotoCard = ({ game }) => {
console.log('game._id -> ', game._id);
    return (
        <section className="img-card">
            <div className="image">
                <Link to={`/details/${game._id}`}>
                    <img src={game.imageUrl} alt="" />
                </Link>
            </div>
            <h3>{game.title}</h3>
        </section>
    )
}

export default PhotoCard;