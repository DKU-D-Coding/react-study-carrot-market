import { Link } from "react-router-dom";

function ItemCard() {
    return (
        <Link to="/product-page" style={{color:"black", textDecoration:"none"}}>
            <div className="item-card">
                <img src="https://images.unsplash.com/photo-1673901159004-cf765b562280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                <div>
                    <h3 style={{margin:0}}>제목제목</h3>
                    <h5 style={{margin:"0"}}>가격가격</h5>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;