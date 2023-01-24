import ItemCard from '../ItemCard.js'

function UserItemList() {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", paddingTop:"20px"}}>
                <div style={{marginLeft:"20px"}}>닉네임님의 판매 상품</div>
                <div style={{marginRight:"20px",color:"gray"}}>모두보기</div>
            </div>
            <div className="item-list">
                {
                [1, 2, 3, 4].map(() => <ItemCard/>)
                }
            </div>
        </div>
    );
}

export default UserItemList;