const Header = () => {
    return    <header>
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
}

export default Header;