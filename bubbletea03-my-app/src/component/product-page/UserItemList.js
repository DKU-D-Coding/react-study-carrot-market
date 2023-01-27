import ItemCard from '../ItemCard.js'
import itemData from '../../data/ItemData.js';

function UserItemList({ userName }) {
    const userItems = itemData.filter(item => item.sellerName == userName);

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", paddingTop:"20px"}}>
                <div style={{marginLeft:"20px"}}>{userName}님의 판매 상품</div>
                <div style={{marginRight:"20px",color:"gray"}}>모두보기</div>
            </div>
            <div className="item-list">
                {
                    userItems.slice(0, 3).map((item, idx) => <ItemCard item={item} key={idx}/>)
                    // 4개만 표시한다.
                }
            </div>
        </div>
    );
}

export default UserItemList;