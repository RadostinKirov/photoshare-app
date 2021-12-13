import {Link} from 'react-router-dom';
const Page404 = () => {
    return (
        <div className="page404">
            <section>
                <div className="image">
                    <img src="./images/404-sad.png"  alt="sad face"/>
                </div>
                <div>
                    <Link to="/" className="btn-home" >Home</Link>
                </div>
            </section>
        </div>
    )
}

export default Page404;