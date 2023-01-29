import styled from 'styled-components';


export default function CategoryModal() {
    return (
        <StyledBlock>
            <section>
                <div className='categories'>
                    {
                        CATEGORY_LIST.map((category, idx) => <button key={idx}>{category}</button>)
                    }
                </div>
            </section>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    section {
        width: 80%;
        height: 90%;
        margin: 0 auto;
        background-color: white;

        .categories {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 40px;
            box-sizing: border-box;

            button {
                height: 100%;
                
                &:hover {
                    background-color: lightgray;
                    transition: 0.2s;
                }
            }

        }
    }
`

const CATEGORY_LIST = [
    "디지털기기", "생활가전", "가구/인테리어",
    "유아동", "생활/가공식품", "유아도서",
    "여성의류", "남성패션/잡화", "게임/취미",
    "뷰티/미용", "반려동물용품", "도서/티켓/음반",
    "식물", "기타 중고물품", "중고차"
]