import styled from "styled-components";

export default function UserContent({ item }) {
    return (<>
        <ProfileBox>
            <img alt="사람 아이콘" src="/product-page/person.png"/>
            <div>{item.sellerName}</div>
        </ProfileBox>
        <PostBox>
            <div>{item.title}</div>
            <span>{item.category}</span> <span>{item.postTime}</span>
            <div>{item.content}</div>
            <div>관심</div>
        </PostBox>
    </>);
}

const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid gray;

    img {
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
`

const PostBox = styled.div`
    padding: 20px;
    border-bottom: 1px solid gray;
`