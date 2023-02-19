import styled from 'styled-components';
import { CATEGORY_LIST } from '../../data/Consts';
import * as shortid from 'shortid';


export default function CategoryModal({ close, select }) {
    return (
        <Container>
            <Background onClick={close} />
            <Modal>
                <Categories>
                    {
                        CATEGORY_LIST.map((category) =>
                            <button onClick={() => { select(category); close(); }} key={shortid.generate()}>
                                {category}
                            </button>
                        )
                    }
                </Categories>
            </Modal>
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
`

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 90%;
    background-color: white;
`

const Categories = styled.div`
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
`