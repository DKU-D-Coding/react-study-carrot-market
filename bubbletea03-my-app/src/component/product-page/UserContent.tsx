import styled from "styled-components";

export default function UserContent({ item }) {
    return (
        <>
            <ProfileBox>
                <img alt="사람 아이콘" src="/icon/person_profile.png" />
                <div>--유저 이름--</div>
            </ProfileBox>
            <PostBox>
                <div>{item.title}</div>
                <span>--카테고리--</span> <span>{item.updateDate}</span>
                <div>--본문내용--</div>
                <div>관심 {item.likeCount}개</div>
            </PostBox>
        </>
    );
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
`;

const PostBox = styled.div`
    padding: 20px;
    border-bottom: 1px solid gray;
`;
