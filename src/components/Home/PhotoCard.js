const PhotoCard = ({
    game,
    navigationChangeHandler
}) => {

    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/details/${game._id}`);
       
    }
    return (
        <section className="img-card">
            <div className="image">
                <a onClick={onDetailsClick} href={game._id}>
                    <img src={game.imageUrl} alt="" />
                </a>
            </div>
            <h3>{game.title}</h3>
        </section>
    )
}

export default PhotoCard;