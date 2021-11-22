import { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';

const Home = (
    { navigationChangeHandler },
) => {

    const onClickHome = () => {
        navigationChangeHandler('home test');
    }


    const [photos, setPhotos] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:3030/');
        const data = await response.json();
        console.log(data);
        setPhotos(data);
    }, []);

    return (
        <div onClick={onClickHome} className="main-content">
            <main>
                <div className="img-container">

                    {
                        photos.length > 0
                            ? photos.map(x => <PhotoCard key={x._id} navigationChangeHandler={navigationChangeHandler} game={x} />)
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
                            <a href="#">user 1</a>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">user 2</a>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">user 3</a>
                        </li>
                    </ul>
                </div>

                <div className="top-commented">
                    <h1>Most commented photo:</h1>
                    <div className="top-commented-img">
                        <a href="#">
                            <div className="top-img">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </div>
                            <h3>waterfall</h3>
                        </a>
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