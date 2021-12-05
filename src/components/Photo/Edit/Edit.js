import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../../../contexts/AuthContext";
import { editPhoto } from "../../../service/photo";

const Edit = () => {
    const { id } = useParams();
    const { photoInfo, userInfo } = useContext(AuthContext)


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const title = data.get('title');
        const description = data.get('description');
        const imageUrl = data.get('imageUrl');
        const owner = userInfo.id;
        const token = userInfo.token;
        const photoId = id;
        const photoData = { title, description, imageUrl, owner, token, photoId };
        console.log(photoData, id)
        editPhoto(photoData, id)
    }

    return (
        <div className="edit">
            <form className="edit-form" onSubmit={onSubmitHandler}>
                <h1>Edit Photo</h1>

                <input type="text" name="title" placeholder="Title" defaultValue={photoInfo.title} />

                <textarea placeholder="Description" defaultValue={photoInfo.description} name="description" id="" cols="30" rows="10"></textarea>

                <input type="text" name="imageUrl" placeholder="ImageURL" defaultValue={photoInfo.imageUrl} />

                <input type="submit" className="add-btn" value="EDIT" />

                <div className="photographer-right">
                    <img src="../images/photographer3.png" alt="right photographer" />
                </div>

                <div className="photographer-left">
                    <img src="../images/photographer2.png" alt="left photographer" />
                </div>
            </form>
        </div>
    )
}

export default Edit;