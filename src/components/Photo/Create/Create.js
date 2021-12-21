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
    const [imageUrlClass, setImageUrlClass] = useState('imageUrl-inactive');
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isDescriptionValid, setIsDescriptionValid] = useState(false);
    const [isImageUrlValid, setIsImageUrlValid] = useState(false)

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


        if (!title || !isTitleValid ) {
            setTitleClass('title-fail');
        }

        if (!description || !isDescriptionValid) {
            setDescriptionClass('title-fail');
        }

        if (!imageUrl || !isImageUrlValid) {
            setImageUrlClass('imageUrl-fail');
        }

        if (title && isTitleValid && description && isDescriptionValid && imageUrl && isImageUrlValid) {
            console.log('fetch')
            createPhoto(photoData)
                .then(res => {
                    console.log('resssss received -> ', res);
                    navigate('/');
                })
                .catch(err => {
                    console.log('errrrrr catched -> ', err);
                    setError(err);
                    setTimeout(() => {
                        setError('');
                    }, 5000);
                    return;
                });

        }


    }

    const onChangeTitle = (e) => {
        const titleInput = e.target.value;
        setTitle(titleInput);

        if (titleInput.length < 5) {

            setTitleClass('title-fail');
            setIsTitleValid(false);
        } else {
            setTitleClass('title-ok');
            setIsTitleValid(true);
        }

    }

    const onChangeDescription = (e) => {
        const descriptionInput = e.target.value;
        setDescription(descriptionInput);

        if (descriptionInput.length < 20) {
            setDescriptionClass('description-fail');
            setIsDescriptionValid(false);
        } else {
            setDescriptionClass('description-ok');
            setIsDescriptionValid(true);
        }
    }

    const onChangeImageUrl = (e) => {
        const imageUrlInput = e.target.value;
        setImageUrl(imageUrlInput);

        if (imageUrlInput.startsWith('http://') || imageUrlInput.startsWith('https://')) {
            setImageUrlClass('imageUrl-ok');
            setIsImageUrlValid(true);
        } else {
            setImageUrlClass('imageUrl-fail');
            setIsImageUrlValid(false);
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
                    <p className={titleClass === 'title-inactive' || titleClass === 'title-ok' ? 'valid' : 'invalid'}>min 5 symbols</p>
                </div>

                <div className="description-container">
                    <label>Description</label>
                    <textarea onChange={onChangeDescription} value={description} placeholder="Description" name="description" id="" cols="30" rows="10" ></textarea>
                    <p className={descriptionClass === 'description-inactive' || descriptionClass === 'description-ok' ? 'valid' : 'invalid'}>min 20 symbols</p>
                </div>

                <div className="imageUrl-container">
                    <label>Image URL</label>
                    <input onChange={onChangeImageUrl} value={imageUrl} type="text" name="imageUrl" placeholder="ImageURL" />
                    <p className={imageUrlClass === 'imageUrl-inactive' || imageUrlClass === 'imageUrl-ok' ? 'valid' : 'invalid'}>URL should start with http://... or https://...</p>
                </div>

                <input type="submit" className="add-btn" value="Add Photo" />

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