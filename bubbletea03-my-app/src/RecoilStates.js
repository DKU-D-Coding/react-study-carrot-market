import { atom } from "recoil";

export const testState = atom({
    key: 'testState',
    default: '',
})

// 홈에서 어떤 카테고리가 보일지 저장하는 변수
export const homeCategoryState = atom({
    key: 'homeCategoryState',
    default: '',
})