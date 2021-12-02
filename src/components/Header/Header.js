import {Link} from 'react-router-dom'

const Header = ({ navigationChangeHandler }) => {
      return (
        <header>
            <div className="logo">
                <Link to="/home">
                    <h2><span className="logo-text">PHOTO</span>SHARE</h2>
                </Link>
            </div>
            <nav>
                <ul>
                    <div className="guest">
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/register">REGISTER</Link></li>
                    </div>
                    <div className="user">
                        <li><Link to="/profile" className="hello-user">hello, IvanIvanov</Link></li>
                        <li><Link to="/catalog">CATALOG</Link></li>
                        <li><Link to="/profile">PROFILE</Link></li>
                        <li><Link to="/create">ADD PHOTO</Link></li>
                        <li><Link to="/logout">LOGOUT</Link></li>
                    </div>
                </ul>
            </nav>

            <div className="header-container">
                <div className="welcome-message">
                    <p>The best place</p>
                    <p>to share your photos!</p>
                </div>
                <div className="header-buttons">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;