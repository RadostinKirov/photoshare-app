import { createPhoto } from '../../../service/photo'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import './Create.css'


const Create = () => {
    const { userInfo } = useContext(AuthContext)
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [titleClass, setTitleClass] = useState('title-inactive');
    const [descriptionClass, setDescriptionClass] = useState('description-inactive');
    const [imageUrlClass, setImageUrlClass] = useState('imageUrl-inactive')

    const [error, setError] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const title = data.get('title');
        const description = data.get('description');
        const imageUrl = data.get('imageUrl');
        const owner = userInfo.id;
        const token = userInfo.token;
        const photoData = { title, description, imageUrl, owner, token };


        if (!title || !description || !imageUrl) {
            setError('Please fill all fields');
            setTimeout(() => {
                setError('');
            }, 4000);
        }


        if (!title) {
            setTitleClass('title-fail');
        }

        if (!description) {
            setDescriptionClass('title-fail');
        }

        if (!imageUrl) {
            setImageUrlClass('imageUrl-fail');
        }

        if (title && description && imageUrl) {
            createPhoto(photoData)
                .then(navigate('/'))
                .catch(err => {
                    console.log(err)
                });

        }


    }

    const onChangeTitle = (e) => {
        const titleInput = e.target.value;
        setTitle(titleInput);

        if (titleInput.length < 5) {

            setTitleClass('title-fail');
        } else {
            setTitleClass('title-ok');
        }

    }

    const onChangeDescription = (e) => {
        const descriptionInput = e.target.value;
        setDescription(descriptionInput);

        if (descriptionInput.length < 20) {
            setDescriptionClass('description-fail');
        } else {
            setDescriptionClass('description-ok');
        }
    }

    const onChangeImageUrl = (e) => {
        const imageUrlInput = e.target.value;
        setImageUrl(imageUrlInput);

        if (imageUrlInput.startsWith('http://') || imageUrlInput.startsWith('https://')) {
            setImageUrlClass('imageUrl-ok');
        } else {
            setImageUrlClass('imageUrl-fail');
        }
    }

    return (
        <div className="create">
            <form className="create-form" onSubmit={onSubmitHandler}>

                <div className={error ? 'error' : 'hidden'}>
                    <p>{error}</p>
                </div>

                <h1>Add New Photo</h1>

                <div className="title-container">
                    <label>Title</label>
                    <input onChange={onChangeTitle} value={title} type="text" name="title" placeholder="Title" />
                    <p className={titleClass == 'title-inactive' || titleClass == 'title-ok' ? 'valid' : 'invalid'}>min 5 symbols</p>
                </div>

                <div className="description-container">
                    <label>Description</label>
                    <textarea onChange={onChangeDescription} value={description} placeholder="Description" name="description" id="" cols="30" rows="10" ></textarea>
                    <p className={descriptionClass == 'description-inactive' || descriptionClass == 'description-ok' ? 'valid' : 'invalid'}>min 20 symbols</p>
                </div>

                <div className="imageUrl-container">
                    <label>Image URL</label>
                    <input onChange={onChangeImageUrl} value={imageUrl} type="text" name="imageUrl" placeholder="ImageURL" placeholder="http..." />
                    <p className={imageUrlClass == 'imageUrl-inactive' || imageUrlClass == 'imageUrl-ok' ? 'valid' : 'invalid'}>URL should start with http://... or https://...</p>
                </div>

                <input type="submit" className="add-btn" value="SUBMIT" />

                <div className="photographer-right">
                    <img src="./images/photographer3.png" alt="" />
                </div>

                <div className="photographer-left">
                    <img src="./images/photographer2.png" alt="" />
                </div>
            </form>
        </div>
    )
}

export default Create;