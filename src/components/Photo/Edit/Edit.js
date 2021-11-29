

const Edit = () => {

    return (
        <div className="edit">
            <form className="edit-form">
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

export default Edit;