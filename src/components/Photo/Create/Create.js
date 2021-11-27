import { createPhoto } from '../../../service/photo'

const Create = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        const title = data.get('title');
        const description = data.get('description');
        const imageUrl = data.get('imageUrl');
        const owner = '619d4b563455f930e0994271'
        const photoData = { title, description, imageUrl, owner };
        createPhoto(photoData);
    }

    return (
        <div className="create">
            <form className="create-form" onSubmit={onSubmitHandler}>
                <h1>Add New Photo</h1>

                <input type="text" name="title" placeholder="Title" />

                <textarea placeholder="Description" name="description" id="" cols="30" rows="10"></textarea>

                <input type="text" name="imageUrl" placeholder="ImageURL" />

                <input type="submit" className="add-btn" />

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