import { useState } from 'react';
import styled from "styled-components";

function PhotoUpload() {
    const [img_arr, img_chg] = useState([]);
    const upload_image = function(e) {
        Object.values(e.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => { 
                img_chg(url => [...url, reader.result])
            };
            reader.readAsDataURL(file);
        });
    }

    const delete_image = function(targetIndex) {
        img_chg(img_arr.filter((_, idx) => (idx !== targetIndex)))
    }

    return (
        <PhotoUploadStyle>
            <label htmlFor="file">
                <UploadButtonStyle alt="업로드 버튼" src='/ui/camera.png'/>
                <input id="file" type="file" accept="image/*" onChange={upload_image} multiple />
            </label>
            {
                img_arr.map((img_url, img_idx) =>
                    <div key={img_idx}>
                        <img alt="업로드 이미지" src={img_url}/>
                        <DeleteButtonStyle className='delete' onClick={() => { delete_image(img_idx) }}>
                            <img alt="삭제 버튼" src="/ui/delete.png"/>
                        </DeleteButtonStyle>
                    </div>
                )
            }
        </PhotoUploadStyle>
    )
}

export default PhotoUpload;


const PhotoUploadStyle = styled.div
`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /*줄넘김*/
    justify-content: left;
    align-content: flex-start;
    padding-top: 100px;
    border-bottom: 1px solid gray;
    input{ display: none; }
    img{
        width: 70px;
        height: 70px;
        margin-left: 15px;
        border: 1px solid black;
        margin-bottom: 15px;
        box-shadow: 1px 1px 4px -1px black;
    }
`
const UploadButtonStyle = styled.img `cursor: pointer;`

const DeleteButtonStyle = styled.div
`
    width: 0;
    height: 0;
    position: relative;
    bottom: 114%;
    left: 65%;
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        box-shadow: none;
    }

`