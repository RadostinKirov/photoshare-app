import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id: userId } = useParams();
    const { allPhotos } = useContext(AuthContext);
    console.log('allophotos -> ', allPhotos);
    const usersPhotos = allPhotos.filter(x => x.owner == userId);
    const totalPhotos = usersPhotos.length;
    const totalLikes = usersPhotos.reduce((acc ,obj) => acc + obj.likes ,0);
    const mostLiked = allPhotos.sort((a, b) => (b.likes - a.likes))[0];

    console.log(mostLiked)
    return (
        <div className="profile">
            <h1>Profile information - <span className="username">IvanIvanov</span></h1>
            <main>
                <ul>
                    <li>
                        <i className="fas fa-thumbs-up"></i>
                        Total likes: <span className="profile-value">10</span>
                    </li>

                    <li>
                        <i className="fas fa-images"></i>
                        Total photos: <span className="profile-value">15</span>
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
                    <a href="#">
                        <img src="https://m4.netinfo.bg/media/images/48038/48038486/r-orig-orig-merapi.jpg" alt="" />
                    </a>
                </div>
            </aside>
        </div>
    )
}

export default Profile;