
function App() {
  return (
  
<body>
    <div className="main-container">

        <header>
            <div className="logo">
                <a href="">
                    <h2><span className="logo-text">PHOTO</span>SHARE</h2>
                </a>
            </div>
            <nav>
                <ul>
                    <div className="guest">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">REGISTER</a></li>
                    </div>
                    <div className="user">
                        <li><a href="#">CATALOG</a></li>
                        <li><a href="#">PROFILE</a></li>
                        <li><a href="#">ADD PHOTO</a></li>
                        <li><a href="#">LOGOUT</a></li>
                    </div>
                </ul>
            </nav>

            <div className="header-container">
                <div className="welcome-message">
                    <p>The best place</p>
                    <p>to share your photos!</p>
                </div>
                <div className="header-buttons">
                    <a href="#">LOGIN</a>
                    <a href="#">REGISTER</a>
                </div>
            </div>
        </header>

        <div className="main-content">
            <main>
                <div className="img-container">

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>

                    <section className="img-card">
                        <div className="image">
                            <a href="#">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </a>
                        </div>
                        <h3>waterfall</h3>
                    </section>
                </div>
            </main>
            <aside>
                <div className="top-users">
                    <h1>Top rated users:</h1>
                    <ul>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">user 1</a>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">user 2</a>
                        </li>
                        <li>
                            <i className="fas fa-trophy"></i>
                            <a href="#">user 3</a>
                        </li>
                    </ul>
                </div>

                <div className="top-commented">
                    <h1>Most commented photo:</h1>
                    <div className="top-commented-img">
                        <a href="#">
                            <div className="top-img">
                                <img src="https://static.posters.cz/image/750webp/78441.webp" alt="" />
                            </div>
                            <h3>waterfall</h3>
                        </a>
                    </div>
                </div>
                <div className="photographer1">
                    <img src="./images/photographer1.png" alt="" />
                </div>
            </aside>
        </div>

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

        <div className="login">
            <form action="" className="login-form">
                <h1>Login</h1>

                <input type="text" placeholder="username" />

                <input type="password" placeholder="******" />

                <input type="submit" className="login-btn" value="login" />


            </form>
        </div>

        <div className="register">
            <form action="" className="register-form">
                <h1>Register</h1>

                <input type="text" placeholder="username" />

                <input type="password" placeholder="Password" />

                <input type="password" placeholder="Repeat Password" />

                <input type="submit" className="register-btn" value="register" />
                <div className="photographer">
                    <img src="./images/photographer1.png" alt="" />
                </div>

            </form>
        </div>

        <div className="profile">
            <h1>Profile information - <span className="username">IvanIvanov</span></h1>
            <main>
                <ul>
                    <li>
                        <i className="fas fa-thumbs-up"></i>
                        Total likes: <span className="profile-value">10</span>
                    </li>

                    <li>
                        <i className="fas fa-images"></i>
                        Total photos: <span className="profile-value">15</span>
                    </li>

                    <li>
                        <i className="fas fa-trophy"></i>
                        Ranklist postion: <span className="profile-value">5</span>
                    </li>
                </ul>
                <a href="#" className="all-photos-btn">See all photos</a>
            </main>
            <aside>
                <h1>BEST PHOTO</h1>
                <div className="best-photo">
                    <a href="#">
                        <img src="https://m4.netinfo.bg/media/images/48038/48038486/r-orig-orig-merapi.jpg" alt="" />
                    </a>
                </div>
            </aside>
        </div>

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

        <footer>
            <div className="author">
                <p>React app designed by <span className="author-name">Radostin Kirov</span></p>
            </div>
            <div className="contacts">
                <ul>
                    <li>
                        <i className="far fa-envelope"></i>
                        radostinkirov87@gmail.com
                    </li>

                    <li>
                        <i className="fas fa-phone"></i>
                        +359883 354 018
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</body>
  );
}

export default App;
