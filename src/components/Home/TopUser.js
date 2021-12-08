import { Link } from "react-router-dom";

const TopUser = (topUser, id) => {
    console.log(id)
    console.log('topUser -> ', topUser)
    return (
        <li>
            <i className="fas fa-trophy"></i>
            <Link to={`/profile/${topUser.id}`}>{topUser.topUser.username}</Link>
        </li>
    )
}

export default TopUser;