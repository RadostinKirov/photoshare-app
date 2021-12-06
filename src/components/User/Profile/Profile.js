import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { getUserById } from "../../../service/auth";

const Profile = () => {
    const { id: userId } = useParams();
    const { allPhotos } = useContext(AuthContext);
    console.log('allophotos -> ', allPhotos);
    const usersPhotos = allPhotos.filter(x => x.owner == userId);
    const totalPhotos = usersPhotos.length;
    const totalLikes = usersPhotos.reduce((acc ,obj) => acc + obj.likes ,0);
    const mostLiked = allPhotos.sort((a, b) => (b.likes - a.likes))[0];
    const [owner, setOwner] = useState('Loadind name...')
    useEffect(() => { 
        getUserById(userId)
        .then(res => setOwner(res))
        .catch(err => console.log('Error get user by Id => ', err))
    }, []);

    console.log(mostLiked)
    return (
        <div className="profile">
            <h1>Profile information - <span className="username">{owner}</span></h1>
            <main>
                <ul>
                    <li>
                        <i className="fas fa-thumbs-up"></i>
                        Total likes: <span className="profile-value">{totalLikes}</span>
                    </li>

                    <li>
                        <i className="fas fa-images"></i>
                        Total photos: <span className="profile-value">{totalPhotos}</span>
                    </li>

                    <li>
                        <i className="fas fa-trophy"></i>
                        Ranklist postion: <span className="profile-value">5</span>
                    </li>
                </ul>
                <a href="#" className="all-photos-btn">See all photos</a>
            </main>
            <aside>
                <h1>BEST PHOTO</h1>
                <div className="best-photo">
                    <Link to={`/details/${mostLiked._id}`}>
                        <img src={mostLiked.imageUrl} alt="" />
                    </Link>
                </div>
            </aside>
        </div>
    )
}

export default Profile;