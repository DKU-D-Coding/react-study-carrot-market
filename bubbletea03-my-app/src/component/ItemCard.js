import { Link } from "react-router-dom";

// TODO: styled-components에 props 받아서 flex-direction 편하게 바꿀 수 있게하기!

function ItemCard({ item }) {
    return (
        <Link to={`/product-page/${item.id}`} style={{color:"black", textDecoration:"none"}}>
            <div className="item-card">
                <img src="https://images.unsplash.com/photo-1673901159004-cf765b562280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                <div>
                    <h3 style={{margin:0}}>{item.title}</h3>
                    <h5 style={{margin:"0"}}>{item.price}</h5>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;