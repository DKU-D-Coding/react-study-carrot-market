import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CardBox = styled.div`
    display: flex;
    height: 300px;
    align-items: center;
    border-bottom: 1px black solid;

    a {
        display: flex;
        height: 200px;
        gap: 10px;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        align-items: center;
    }

    img {
        height: 200px;
    }

    .cardDetail{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
    }

    .like {
        text-align: right;
        font-size: 25px;
    }
`
function Card(props) {
    return (
            <CardBox>
                <Link to={'/product/' + props.goodsId}>
                    <img src={props.img}/>
                    <div className="cardDetail">
                        <div>
                            <h2>{props.title}</h2>
                            <p>{props.price}원</p>
                        </div>
                        <p className="like"><FontAwesomeIcon icon={faHeart}/> {props.like}</p>
                    </div>
                </Link>
            </CardBox>
    )
}

export default Card;