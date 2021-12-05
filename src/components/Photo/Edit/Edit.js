import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../../../contexts/AuthContext";

const Edit = () => {
    const { id } = useParams();
    const { photoInfo } = useContext(AuthContext)
    console.log("Edit ID -> ", id);
    console.log(photoInfo)
    return (
        <div className="edit">
            <form className="edit-form">
                <h1>Edit Photo</h1>

                <input type="text" name="title" placeholder="Title" />

                <textarea placeholder="Description" name="description" id="" cols="30" rows="10"></textarea>

                <input type="text" name="imageUrl" placeholder="ImageURL" />

                <input type="submit" className="add-btn" />

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