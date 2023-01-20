function Card(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.img}/>           
        </div>
    )
}

export default Card;