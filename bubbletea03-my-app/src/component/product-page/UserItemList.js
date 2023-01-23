import ItemCard from '../ItemCard.js'

function UserItemList() {
    return (
        <div>
            <div>닉네임님의 판매 상품</div>
            <div>모두보기</div>
            <div className="item-list">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </div>
    );
}

export default UserItemList;