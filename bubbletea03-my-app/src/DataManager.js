import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useSetRecoilState } from 'recoil';
import { itemData } from './RecoilStates';
import { useEffect } from 'react';

export default function DataManager() {

    const navigate = useNavigate();
    const [cookies] = useCookies(['accessToken']);
    const setItemData = useSetRecoilState(itemData);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'api/item',
            headers: {
                'Authorization': 'Bearer ' + cookies.accessToken,
            },
        })
            .then((response) => {
                console.log(response);
                let resultItemData = Array.from(response.data.data.content);
                setItemData(resultItemData)
            })
            .catch((error) => {
                console.log(error);
                if (error.response.data.code === "INVALID_TOKEN") {
                    navigate('/welcome');
                }
            });
    }, [])

}