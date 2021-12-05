import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { getPhogoById, likePhoto } from "../../../service/photo";
import { getUserById } from '../../../service/auth';
import './Details.css';

const Details = () => {
    let { userInfo, addPhotoInfo } = useContext(AuthContext);
    const { id: photoId } = useParams();



    //    console.log("photoInfo -> ", photoId);
    const [photo, setPhoto] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [ownerID, setOwnerID] = useState('123');
    const [owner, setOwner] = useState('loading nanme...');
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getPhogoById(photoId)
            .then(result => {
                setPhoto(result);
                setOwnerID(result.owner);
                result.owner == userInfo.id ? setIsAuth(true) : setIsAuth(false);
                if (result.usersLiked.includes(userInfo.id)) {
                    setIsLiked(true);
                };
                addPhotoInfo(result);



            });


    }, []);

    useEffect(() => {
        getUserById(ownerID)
            .then(res => {
                setOwner(res);
            })
            .catch(err => {
                console.log('Error get user by ID -> ', err);
                setOwner('unknown');
            })
    }, [ownerID])

    const onClickLikeHandler = (e) => {
        e.preventDefault();
        const data = {
            userId: userInfo.id,
            photoId
        }
        likePhoto(data)
            .then(res => {
                const newLikes = res.likes;
                console.log('setPhoto entered')
                setPhoto({ ...photo, likes: newLikes });
                setIsLiked(true);
            })
            .catch(err => console.log('>>>>> ', err));
    }

    const likeCheck = () => {
        if (!isLiked && !isAuth) {
            return 'thumbs-up-active';
        } else {
            return 'thumbs-up-inactive';
        }
    }

    return (
        <div className="details">
            <section className="image">
                <h1>{photo.title}</h1>
                <h3 className="author-container">author: <span className="author-name">{owner}</span></h3>
                <div className="image-container">
                    <img src={photo.imageUrl} alt="" />

                    <Link to={`/edit/${photoId}`} className={'edit-btn ' + (isAuth ? 'block' : 'none')}><i className="fas fa-edit"></i></Link>
                    <Link to="" className={'delete-btn ' + (isAuth ? 'block' : 'none')}><i className="fas fa-trash-alt"></i></Link>

                </div>

                <p>{photo.description}</p>
                <div className="likes-container">
                    <Link to="" onClick={onClickLikeHandler} className={likeCheck()}><i className={"fas fa-thumbs-up "}></i></Link>
                    <span>{photo.likes}</span>
                </div>

                <section className="comments">
                    <h2>Comments</h2>
                    <section className="comment-container">
                        <p className="no-comments">No comments yet</p>
                        <p><span className="username">IvanIvanov</span>: <span className="comment">awsome pic!!!</span></p>
                        <p><span className="username">Petar Petrov</span>: <span className="comment">I was ther , it was
                            beutiful</span></p>
                        <p><span className="username">Georgi Georgiev</span>: <span className="comment">My photos are much
                            better!!!</span></p>
                    </section>
                    <form action="" className="add-comment">
                        <input className="input-field" type="text" name="" id="" />
                        <input className="add-comment-btn" type="submit" value="Add comment" />
                    </form>
                </section>
            </section>
        </div>
    )
}

export default Details;