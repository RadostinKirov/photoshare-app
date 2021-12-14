import { useState, useEffect } from 'react';
import { getAllPhotos } from '../../service/photo';
import PhotoCard from './PhotoCard';
import TopUser from './TopUser';
import { Link } from 'react-router-dom';
import './Home.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { getRanklist } from '../../service/auth';

const Home = () => {
    const { userInfo, addAllPhotosInfo, allPhotos } = useContext(AuthContext);
    const isUser = Boolean(userInfo.username.length)
    const [photos, setPhotos] = useState([]);
    const [ranklist, setRanklist] = useState([]);

    const mostLiked = allPhotos.sort((a, b) => (b.likes - a.likes))[0];

    useEffect(() => {
        getAllPhotos()
            .then(result => {
                setPhotos(result);
                console.log('result -> ', result)
                 addAllPhotosInfo(result);
            });

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getRanklist()
            .then(res => {
                setRanklist(res);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="main-content">
            <main className={isUser ? 'main-user' : 'main-guest'}>
                <div className="img-container">

                    {
                        photos.length > 0
                            ? photos.map(x => <PhotoCard key={x._id} photo={x} />)
                            : <h4 className='no-photos'>No photos yet</h4>
                    }


                </div>
            </main>
            <aside className={isUser ? 'aside-user' : 'aside-guest'}>
                <div className="top-users">
                    <h1>Top rated users:</h1>
                    <ul>
                        {
                            ranklist
                                ? ranklist.map(x => <TopUser key={x[0]} topUser={x[1]} id={x[0]} />)
                                : <h4> Top users loading....</h4>
                        }
                    </ul>
                </div>

                <div className="top-liked">
                    <h1>Most liked photo:</h1>
                    <div className="top-liked-img">
                        <Link to={mostLiked ? `/details/${mostLiked._id}`: ''}>
                            <div className="top-img">
                                <img src={mostLiked? mostLiked.imageUrl : ''} alt="" />
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