import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CardBox = styled.div`
    display: flex;
    height: 200px;
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
        height: 120px;
        border: 1px solid black;
    }

    .cardDetail{
        display: flex;
        width: 100%;
        padding-left: 15px;
        flex-direction: column;
        justify-content: space-around;
    }

    .title {
        font-size: 20px;
    }

    .like {
        text-align: right;
        font-size: 25px;
    }
`
function Card({ goodsId, imgSrc, title, price, like }) {
    return (
            <CardBox>
                <Link to={'/product/' + goodsId}>
                    <img src={imgSrc}/>
                    <div className="cardDetail">
                        <div>
                            <b className="title">{title}</b>
                            <p>{price}원</p>
                        </div>
                        <p className="like"><FontAwesomeIcon icon={faHeart}/> {like}</p>
                    </div>
                </Link>
            </CardBox>
    )
}

export default Card;