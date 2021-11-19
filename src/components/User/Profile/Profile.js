const Profile = () => {
    return (
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
    )
}

export default Profile;