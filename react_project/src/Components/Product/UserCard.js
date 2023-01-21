import { Link } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div`
    img {
        margin-bottom: 10px;
    }
    p {
        padding-left: 20px;
    }
`

function UserCard(props){
    return(
        <Link to={'/product/' + props.goodsId}>
            <Card className="card">
                <img src={props.img}/>
                <p>{props.title}</p>
                <p>{props.price}</p>
            </Card>
        </Link>
    )
}

export default UserCard;