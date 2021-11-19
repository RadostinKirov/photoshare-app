const Footer = () => {
    return (
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
    )
}

export default Footer;