import { createPhoto } from '../../../service/photo'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
const Create = () => {
    const {userInfo} = useContext(AuthContext)
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const title = data.get('title');
        const description = data.get('description');
        const imageUrl = data.get('imageUrl');
        const owner = userInfo.id;
        const token = userInfo.token;
        const photoData = { title, description, imageUrl, owner, token };
        createPhoto(photoData)
            .then(navigate('/'));
    }

    return (
        <div className="create">
            <form className="create-form" onSubmit={onSubmitHandler}>
                <h1>Add New Photo</h1>

                <input type="text" name="title" placeholder="Title" />

                <textarea placeholder="Description" name="description" id="" cols="30" rows="10"></textarea>

                <input type="text" name="imageUrl" placeholder="ImageURL" />

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