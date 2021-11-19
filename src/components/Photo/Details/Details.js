const Details = () => {
    return (
        <div className="details">
            <section className="image">
                <h1>Waterfall</h1>
                <h3 className="author-container">author: <span className="author-name">IvanIvanov</span></h3>
                <div className="image-container">
                    <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />

                    <a href="" className="edit-btn"><i className="fas fa-edit"></i></a>
                    <a href="" className="delete-btn"><i className="fas fa-trash-alt"></i></a>

                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae similique at expedita quae
                    consequatur perspiciatis veritatis corporis ut est minus.</p>
                <div className="likes-container">
                    <a href=""><i className="fas fa-thumbs-up"></i></a>
                    <span>5</span>
                </div>

                <section className="comments">
                    <h2>Comments</h2>
                    <section className="comment-container">
                        <p className="no-comments">No comments yet</p>
                        <p><span className="username">IvanIvanov</span>: <span className="comment">awsome pic!!!</span></p>
                        <p><span className="username">Petar Petrov</span>: <span className="comment">I was ther , it was
                            beutiful</span></p>
                        <p><span className="username">Georgi Georgiev</span>: <span className="comment">My photos are much
                            better!!!</span></p>
                    </section>
                    <form action="" className="add-comment">
                        <input className="input-field" type="text" name="" id="" />
                        <input className="add-comment-btn" type="submit" value="Add comment" />
                    </form>
                </section>
            </section>
        </div>
    )
}

export default Details;