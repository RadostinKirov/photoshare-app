import './Comments.css';
import AuthContext from '../../contexts/AuthContext';
import { editPhoto } from '../../service/photo';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Comments = ({photoId}) => {
    console.log('props -> ', photoId)
    const navigate = useNavigate();
    const {userInfo, photoInfo} = useContext(AuthContext);
    const [lastComments, setLastComments] = useState([[]]);

    const onSubmitComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = data.get('comment');
        const comment = {username: userInfo.username, text}
        const title = photoInfo.title;
        const description = photoInfo.description;
        const imageUrl = photoInfo.imageUrl;
        const owner = userInfo.id;
        const token = userInfo.token;
     
      
        const photoData = { title, description, imageUrl, owner, token, photoId, comment };
       console.log('post Data -> ', photoData)
       
       if(comment){
        editPhoto(photoData, photoId)
        .then(res => {
          
          const commentsArray = res.comments.slice(-3);
          console.log(commentsArray)
            // setLastComments(res.comments.slice(-3));
            navigate(`/details/${photoId}`);
        })
        .catch(err => {
            console.log(err);
            // setError(err);
            setTimeout(() => {
                // setError('');
            }, 5000);
            return;

        });
       }
       
        console.log(photoData)
    }

    return (
        <section className="comments">
            <h2>Comments</h2>
            {lastComments}
            <section className="comment-container">
                <p className="no-comments">No comments yet</p>
                <p><span className="username">IvanIvanov</span>: <span className="comment">awsome pic!!!</span></p>
                <p><span className="username">Petar Petrov</span>: <span className="comment">I was ther , it was
                    beutiful</span></p>
                <p><span className="username">Georgi Georgiev</span>: <span className="comment">My photos are much
                    better!!!</span></p>
            </section>
            <form onSubmit={onSubmitComment} action="" className="add-comment">
                <input className="input-field" type="text" name="comment" id="" />
                <input className="add-comment-btn" type="submit" value="Add comment" />
            </form>
        </section>
    )
}

export default Comments;