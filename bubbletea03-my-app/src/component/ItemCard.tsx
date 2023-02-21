import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState } from "react";

export default function ItemCard({ item, mode }) {

    const [cookies] = useCookies(['accessToken']);
    const [currentLikeCount, setLikeCount] = useState(item.likeCount);

    const handleLikeButton = function(e) {
        axios({
            method: 'post',
            url: '/api/like/' + item.itemId,
            headers: {
                'Authorization': 'Bearer ' + cookies.accessToken,
            },
        })
        .then((response) => {
            console.log(response);
            const isFirstLike = response.data.data;
            if (isFirstLike)
                setLikeCount(currentLikeCount + 1);
            else
                setLikeCount(currentLikeCount - 1);
        })
        .catch((error) => {
            console.log(error);
        })

        // axios({
        //     method: 'get',
        //     url: '/api/like/user',
        //     headers: {
        //         'Authorization': 'Bearer ' + cookies.accessToken,
        //     },
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    }

    return (
        <Container>
            <Link to={`/product-page/${item.itemId}`}>
                <ItemBox mode={mode}>
                    <img alt="물건 사진" src={item.url} />
                    <div>
                        <h3>{item.title}</h3>
                        <h5>{item.price}</h5>
                    </div>
                </ItemBox>
            </Link>
            <LikeBox>
                <button onClick={handleLikeButton}>
                    <img alt="빈 하트" src="/icon/heart.png"/>
                </button>
                {currentLikeCount}
            </LikeBox>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`

const LikeBox = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    
    width: 50px;
    height: 50px;

    img {
        width: 40px;
        height: 40px;
    }
`


const ItemBox = styled.div<{mode: string}>`
    display: flex;
    h3, h5 { margin: 0; }

    ${function ({ mode }) {
        switch (mode) {
            case "home":
                return css`
                    margin: 20px;
                    border-bottom: 1px solid gray;
                    padding-bottom: 10px;

                    div { margin-left: 20px; }

                    img {
                        width: 100px;
                        height: 100px;
                    }
                `
            case "item-list":
                return css`
                    flex-direction: column;

                    img {
                        width: 100%;
                        height: 100px;
                    }
                `
        }
    }}
`