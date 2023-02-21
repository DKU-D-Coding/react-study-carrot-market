import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect, useMemo, useState } from "react";

interface IProps {
    item: any; // 임시
    mode: string;
    isLiked?: boolean;
}

export default function ItemCard({ item, mode, isLiked } : IProps) {

    const [cookies] = useCookies(['accessToken']);
    const [currentLikeState, setLikeState] = useState(isLiked);
    // 고찰 결과: 부모 컴포넌트에서 isLiked가 바뀌면서 재렌더링을 했으나 위의 state는 업데이트 되지 않았다.

    useEffect(() => {
        setLikeState(isLiked);
        console.log("이게 왜안돼")
    }, [])

    const handleLikeButton = function(e) {
        axios({
            method: 'post',
            url: '/api/like/' + item.itemId,
            headers: {
                'Authorization': 'Bearer ' + cookies.accessToken,
            },
        })
        .then((response) => {
            const likeData = response.data.data;
            setLikeState(likeData);
        })
        .catch((error) => {
            console.log(error);
        })
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
                    {
                        currentLikeState ?
                            <img alt="꽉 찬 하트" src="/icon/filled_heart.png"/>
                            :
                            <img alt="빈 하트" src="/icon/empty_heart.png"/>

                    }
                </button>
                {
                    isLiked ?
                        currentLikeState ? item.likeCount : item.likeCount - 1
                        :
                        currentLikeState ? item.likeCount + 1 : item.likeCount
                }
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