import styled from 'styled-components';


export default function CategoryModal({ close, select }) {
    return (
        <Container>
            <Background onClick={close}/>
            <section>
                <div className='categories'>
                    {
                        CATEGORY_LIST.map((category, idx) => 
                            <button onClick={() => {select(category); close();}} key={idx}>
                                {category}
                            </button>
                            )
                    }
                </div>
            </section>
        </Container>
    );
}

const Background = styled.div`
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 90%;
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