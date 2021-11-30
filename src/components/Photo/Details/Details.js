import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    console.log("photoInfo -> ", id);
    const [photo, setPhoto] = useState([]);

    useEffect(async () => {
        console.log('in useEfect -> ID -> ', id);
        const response = await fetch(`http://localhost:3030/photo/details/${id}`);
        const data = await response.json();
        console.log('console log data -> ', data);
        setPhoto(data);
    }, [])

    return (
        <div className="details">
            <section className="image">
                <h1>{photo.title}</h1>
                <h3 className="author-container">author: <span className="author-name">IvanIvanov</span></h3>
                <div className="image-container">
                    <img src={photo.imageUrl} alt="" />

                    <Link to={`/edit/${id}`} className="edit-btn"><i className="fas fa-edit"></i></Link>
                    <Link to="" className="delete-btn"><i className="fas fa-trash-alt"></i></Link>

                </div>

                <p>{photo.description}</p>
                <div className="likes-container">
                    <a href=""><i className="fas fa-thumbs-up"></i></a>
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