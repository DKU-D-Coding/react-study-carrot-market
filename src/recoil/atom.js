import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
// export const itemListState = atom({
//   key: 'itemListState',
//   default: [],
// });
export const itemListFilterState = atom({
  key: 'itemListFilterState',
  default: 'Show All',
});
