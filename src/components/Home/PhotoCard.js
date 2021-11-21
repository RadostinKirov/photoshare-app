const PhotoCard = ({game}) => {
    console.log(game.imageUrl)
    return (
        <section className="img-card">
            <div className="image">
                <a href="#">
                    <img src={game.imageUrl} alt="" />
                </a>
            </div>
            <h3>{game.title}</h3>
        </section>
    )
}

export default PhotoCard;