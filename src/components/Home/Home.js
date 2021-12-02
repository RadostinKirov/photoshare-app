import { useState, useEffect } from 'react';
import { getAllPhotos } from '../../service/photo';
import PhotoCard from './PhotoCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getAllPhotos()
            .then(result => setPhotos(result))
    }, []);

    return (
        <div className="main-content">
            <main>
                <div className="img-container">

                    {
                        photos.length > 0
                            ? photos.map(x => <PhotoCard key={x._id} game={x} />)
                            : <h4 className='no-photos'>No photos yet</h4>
                    }


                </div>
            </main>
            <aside>
                <div className="top-users">
                    <h1>Top rated users:</h1>
                    <ul>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <Link to="#">user 1</Link>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <Link to="#">user 2</Link>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <Link to="#">user 3</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-commented">
                    <h1>Most commented photo:</h1>
                    <div className="top-commented-img">
                        <Link to="#">
                            <div className="top-img">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </div>
                            <h3>waterfall</h3>
                        </Link>
                    </div>
                </div>
                <div className="photographer1">
                    <img src="./images/photographer1.png" alt="" />
                </div>
            </aside>
        </div>
    )
}


export default Home;