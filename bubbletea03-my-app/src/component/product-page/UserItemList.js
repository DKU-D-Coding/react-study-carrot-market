import ItemCard from '../ItemCard.js'
import itemData from '../../data/ItemData.js';
import styled from 'styled-components';

export default function UserItemList({ userName }) {
    const userItems = itemData.filter(item => item.sellerName == userName);

    return (
        <>
            <HeaderBox>
                <div className="user-name">{userName}님의 판매 상품</div>
                <button>
                    <div className="show-all">모두보기</div>
                </button>
            </HeaderBox>
            <ItemListBox>
                {
                    userItems.slice(0, 3).map((item, idx) => <ItemCard item={item} mode="item-list" key={idx}/>)
                    // 4개만 표시한다.
                }
            </ItemListBox>
        </>
    );
}

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .user-name {
        margin-left: 20px;
    }
    
    .show-all {
        margin-right: 20px;
        color: gray;
    }
`


const ItemListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 25px;
`