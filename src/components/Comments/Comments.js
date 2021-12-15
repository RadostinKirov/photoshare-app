import './Comments.css';
import AuthContext from '../../contexts/AuthContext';
import { editPhoto } from '../../service/photo';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment.js'

const Comments = ({ data }) => {
    const photoId = data.photoId;
    const loadedComments = data.loadedComments;
    console.log('props photoID -> ', photoId);
    console.log('props loadedComments ->', loadedComments)
    const navigate = useNavigate();
    const { userInfo, photoInfo } = useContext(AuthContext);
    const [lastComments, setLastComments] = useState();
    const [inputText, setInputText] = useState('');


    useEffect(() => {
        if (loadedComments) {
            setLastComments(loadedComments);
        }
    }, [loadedComments])



    const onSubmitComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = data.get('comment');
        
      
        if (text) {
            
            setInputText(text);
        }else {
            return
        }

        const comment = { username: userInfo.username, text }
        const title = photoInfo.title;
        const description = photoInfo.description;
        const imageUrl = photoInfo.imageUrl;
        const owner = userInfo.id;
        const token = userInfo.token;


        const photoData = { title, description, imageUrl, owner, token, photoId, comment };
        console.log('post Data -> ', photoData)

        if (comment) {
            editPhoto(photoData, photoId)
                .then(res => {

                    const commentsArray = res.comments.slice(-3);
                    console.log(commentsArray)
                    setInputText('');
                    setLastComments(commentsArray);

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

    const onChangeInputText = (e) => {
        const typingText = e.target.value;
        setInputText(typingText)
    }
    return (
        <section className="comments">
            <h2>Comments</h2>

            <section className="comment-container">

                {lastComments
                    ? lastComments.map(line => <Comment key={uuidv4()} data={line} />)
                    : <p className="no-comments">No comments yet</p>
                }

            </section>
            <form onSubmit={onSubmitComment} action="" className="add-comment">
                <input onChange={onChangeInputText} className="input-field" value={inputText} type="text" name="comment" id="" />
                <input className="add-comment-btn" type="submit" value="Add comment" />
            </form>
        </section >
    )
}

export default Comments;