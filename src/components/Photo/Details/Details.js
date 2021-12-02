import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { getPhogoById } from "../../../service/photo";

const Details = () => {
    const { userInfo } = useContext(AuthContext);
    const { id } = useParams();
    console.log("photoInfo -> ", id);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        getPhogoById(id)
            .then(result => setPhoto(result))
        console.log('in useEfect -> ID -> ', id);
    }, [])

    return (
        <div className="details">
            <section className="image">
                <h1>{photo.title}</h1>
                <h3 className="author-container">author: <span className="author-name">{userInfo.username}</span></h3>
                <div className="image-container">
                    <img src={photo.imageUrl} alt="" />

                    <Link to={`/edit/${id}`} className="edit-btn"><i className="fas fa-edit"></i></Link>
                    <Link to="" className="delete-btn"><i className="fas fa-trash-alt"></i></Link>

                </div>

                <p>{photo.description}</p>
                <div className="likes-container">
                    <Link to=""><i className="fas fa-thumbs-up"></i></Link>
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