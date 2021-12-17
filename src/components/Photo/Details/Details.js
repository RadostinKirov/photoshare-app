import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { deletePhoto, getPhogoById, likePhoto } from "../../../service/photo";
import { getUserById } from '../../../service/auth';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './Details.css';
import Comments from "../../Comments/Comments";

const Details = () => {
    let { userInfo, addPhotoInfo } = useContext(AuthContext);
    const { id: photoId } = useParams();
    const navigate = useNavigate();



    //    console.log("photoInfo -> ", photoId);
    const [photo, setPhoto] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [ownerID, setOwnerID] = useState('123');
    const [owner, setOwner] = useState('loading nanme...');
    const [isLiked, setIsLiked] = useState(false);
    const [loadedComments, setLoadedComment] = useState([]);
    const [data, setData] = useState({photoId});

    useEffect(() => {
        getPhogoById(photoId)
            .then(result => {
                setPhoto(result);
                setOwnerID(result.owner);
                result.owner === userInfo.id ? setIsAuth(true) : setIsAuth(false);
                console.log('result -> ', result)
                setLoadedComment(result.comments.slice(-3));
                setData({...data, loadedComments:result.comments.slice(-3) })
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

    const onClickDeleteHandler = (e) => {
        e.preventDefault();
        console.log('delete clicked')
        confirmAlert({
            title: 'Delete photo',
            message: 'Are you sure you want to do delete this photo?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        deletePhoto(photoId)
                            .then(navigate('/'));
                    }
                },
                {
                    label: 'No',
                    onClick: () => navigate(`/details/${photoId}`)
                }
            ]
        });


        // deletePhoto(photoId)
        // .then(navigate('/'));
    }

    const likeCheck = () => {
        if (!isLiked && !isAuth) {
            return 'thumbs-up-active';
        } else {
            return 'thumbs-up-inactive';
        }
    }

    console.log('loaded Comments in Details -> ', loadedComments)

    console.log('all data -> ', data)
    return (
        <div className="details">
            <section className="image">
                <h1>{photo.title}</h1>
                <h3 className="author-container">author: <span className="author-name">{owner}</span></h3>
                <div className="image-container">
                    <img src={photo.imageUrl} alt="" />

                    <Link to={`/edit/${photoId}`} className={'edit-btn ' + (isAuth ? 'block' : 'none')}>
                        <i className="fas fa-edit"></i>
                    </Link>
                    <Link to='' onClick={onClickDeleteHandler} className={'delete-btn ' + (isAuth ? 'block' : 'none')}>
                        <i className="fas fa-trash-alt"></i>
                    </Link>

                </div>

                <p>{photo.description}</p>
                <div className="likes-container">
                    <Link to="" onClick={onClickLikeHandler} className={likeCheck()}><i className={"fas fa-thumbs-up "}></i></Link>
                    <span>{photo.likes}</span>
                </div>

                <Comments data={data} />
            </section>
        </div>
    )
}

export default Details;