const Header = ({ navigationChangeHandler }) => {
    const onHeaderClick = (e) => {
        e.preventDefault();
        let url = new URL(e.target.href);
        navigationChangeHandler(url.pathname);
    }



    return (
        <header onClick={onHeaderClick}>
            <div className="logo">
                <a href="/home">
                    <h2><span className="logo-text">PHOTO</span>SHARE</h2>
                </a>
            </div>
            <nav>
                <ul>
                    <div className="guest">
                        <li><a href="/home">HOME</a></li>
                        <li><a href="/login">LOGIN</a></li>
                        <li><a href="/register">REGISTER</a></li>
                    </div>
                    <div className="user">
                        <li><a href="/profile" className="hello-user">hello, IvanIvanov</a></li>
                        <li><a href="/catalog">CATALOG</a></li>
                        <li><a href="/profile">PROFILE</a></li>
                        <li><a href="/create">ADD PHOTO</a></li>
                        <li><a href="/logout">LOGOUT</a></li>
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
    )
}

export default Header;