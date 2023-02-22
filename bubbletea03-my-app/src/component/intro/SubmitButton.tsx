import styled from 'styled-components';
import { css } from 'styled-components';

interface IProps {
    value : string;
    warning?: string;
}

export default function SubmitButton({value, warning}: IProps) {
    return (<>
        {
            warning ?
                <WarningBox>{warning}</WarningBox>
                :
                <Input type="submit" value={value}/>
        }
    </>);
}

const BOX_CSS = css`
    display: block;
    width: 95%;
    height: 50px;
    line-height: 50px;
    font-size: x-large;
    margin: 0 auto;
    margin-top: 5vh;
    text-align: center;
    color: white;
`

const Input = styled.input`
    ${BOX_CSS}
    background-color: orange;
`

const WarningBox = styled.div`
    ${BOX_CSS}
    background-color: lightcoral;
`
