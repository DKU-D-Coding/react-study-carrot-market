import { atom } from "recoil";

const testState = atom({
    key: 'testState',
    default: '',
})

export { testState }; 