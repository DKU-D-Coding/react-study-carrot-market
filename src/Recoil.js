
import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';
import axios from 'axios';

/*
export const productData = selector({
  key: 'productData',
  get: async ({ get }) => {
    const response = await axios.get('/products');
    return response.data;
  },
});
*/


const product = [ 
  { pid: 0, pname: "닌텐도 스위치", price: 360000, heart: 6, seller: "이예일", category: "게임/취미"},
  { pid: 1, pname: "노트북", price: 1330000, heart: 0, seller: "이예일", category: "디지털기기" },
  { pid: 2, pname: "스마트폰", price: 770000, heart: 2, seller: "이예이", category: "디지털기기" },
  { pid: 3, pname: "오디오 스피커", price: 120000, heart: 3, seller: "이예이", category: "디지털기기" },
  { pid: 4, pname: "플레이스테이션", price: 330000, heart: 6, seller: "이예이", category: "게임/취미"  },
  { pid: 5, pname: "보조배터리", price: 55000, heart: 11, seller: "이예이", category: "디지털기기" },
  { pid: 6, pname: "컴퓨터 모니터", price: 190000, heart: 8, seller: "이예삼", category: "디지털기기" },
  { pid: 7, pname: "헤드폰", price: 170000, heart: 0, seller: "이예사", category: "디지털기기" }    
];

export const productData = atom({
  key: 'productData',
  default: product
})

const categories = [
  "디지털기기", "생활가전", "가구/인테리어",
  "유아동", "생활/가공식품", "유아도서",
  "여성의류", "남성패션/잡화", "게임/취미",
  "뷰티/미용", "반려동물용품", "도서/티켓/음반",
  "식물", "기타 중고물품", "중고차"
];

export const categoryData = atom({
  key: 'categoryData',
  default: categories
})

export const categoryFilter = atom({
    key: 'categoryFilter',
    default: '전체'
})
  

/*
let a = {"cid":2,"cname":"이예이","email":"abc","password":"1234","phone":"1234567","nickname":"일단은예일쓰"};
  (() => {
    fetch("new?customer="+JSON.stringify(a), {method: "POST"})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          pd_chg(data);
        });
  })();
*/

const { persistAtom } = recoilPersist();

export const LoginStateAtom = atom({
  key: 'LoginState',
  default: {
    state: false,
    accessToken: '',
    refreshToken: '',
    nickName: '',
    userId: '',
  },
  effects_UNSTABLE: [persistAtom],
});