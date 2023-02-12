import { atom } from 'recoil';
export const itemListState = atom({
  key: 'itemListState',
  default: [],
});
export const itemListFilterState = atom({
  key: 'itemListFilterState',
  default: 'Show All',
});
