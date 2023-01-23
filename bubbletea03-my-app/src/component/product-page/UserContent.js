
function UserContent() {
    return (
        <div className="user-content">
            <div className="profile">
                <img src="/product-page/person.png" style={{width:"70px", height:"70px", marginRight:"10px"}}/>
                <div>닉네임</div>
            </div>
            <div className="post">
                <div>제목</div>
                <span>카테고리</span> <span>게시시간</span>
                <div>본문</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>관심</div>
            </div>
        </div>
    );
}

export default UserContent;