import AuthContext from "../../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../../../service/auth";
import PhotoCard from "../../Home/PhotoCard";
import './Profile.css';

const Profile = () => {

    const { id } = useParams();
    let userId = id;
    const { allPhotos } = useContext(AuthContext);
    console.log('allophotos -> ', allPhotos);
    console.log('profile page entered !');
  
   const usersPhotos = allPhotos.filter(x => x.owner === userId);
   
   const totalPhotos = usersPhotos.length;
 
   const totalLikes = usersPhotos.reduce((acc, obj) => acc + obj.likes, 0);

   const mostLiked = usersPhotos.sort((a, b) => (b.likes - a.likes))[0];
    console.log('mostLiked -> ', mostLiked);
    const [ownerPhoto, setOwnerPhoto] = useState('Loadind name...');
    console.log('useState done')
    let [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log('use effect entered')
        getUserById(userId)
            .then(res => {
                console.log('res -> ', res);
                setOwnerPhoto(res)
            })
            .catch(err => console.log('Error get user by Id => ', err))
    }, [userId]);


    const onShowHideClick = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);

    }
    console.log(mostLiked)
    return (
        <div className="profile">
            <h1>Profile information - <span className="username">{ownerPhoto}</span></h1>
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

                </ul>
                {mostLiked
                    ? <Link onClick={onShowHideClick} to='' className="all-photos-btn">{!isVisible ? 'See all photos' : 'Hide all Photos'}</Link>
                    : ''
                }

            </main>
            <aside>
                <h1>BEST PHOTO</h1>
                <div className="best-photo">
                    {mostLiked
                        ? <Link to={`/details/${mostLiked._id}`}>
                            <img src={mostLiked.imageUrl} alt="" />
                        </Link>
                        : <h3 className="no-photos">No Photos uploaded yet</h3>
                    }
                </div>
            </aside>
            <div className="user-photos">
                {
                    !isVisible
                        ? ''
                        : usersPhotos.map(x => <PhotoCard key={x._id} photo={x} />)
                }
            </div>
        </div>
    )
}

export default Profile;