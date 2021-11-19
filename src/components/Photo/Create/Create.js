const Create = () => {
    return (
        <div className="create">
            <form action="" className="create-form">
                <h1>Add New Photo</h1>

                <input type="text" placeholder="Title" />

                <textarea placeholder="Description" name="" id="" cols="30" rows="10"></textarea>

                <input type="text" placeholder="ImageURL" />

                <input type="submit" className="add-btn" value="add" />

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