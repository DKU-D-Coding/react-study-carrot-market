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

function UserCard({ goodsId, imgSrc, title, price }){
    return(
        <Link to={'/product/' + goodsId}>
            <Card className="card">
                <img src={imgSrc}/>
                <p>{title}</p>
                <p>{price}</p>
            </Card>
        </Link>
    )
}

export default UserCard;