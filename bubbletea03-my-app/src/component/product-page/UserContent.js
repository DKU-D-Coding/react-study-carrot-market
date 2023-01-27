
function UserContent({ item }) {
    return (
        <div className="user-content">
            <div className="profile">
                <img src="/product-page/person.png" style={{width:"70px", height:"70px", marginRight:"10px"}}/>
                <div>{item.sellerName}</div>
            </div>
            <div className="post">
                <div>{item.title}</div>
                <span>{item.category}</span> <span>{item.postTime}</span>
                <div>{item.content}</div>
                <div>관심</div>
            </div>
        </div>
    );
}

export default UserContent;