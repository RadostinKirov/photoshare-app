

const Comment = ({data}) => {
    
    return (
        <p><span className="username">{data.username}</span>: <span className="comment">{data.text}</span></p>
    )
}

export default Comment;