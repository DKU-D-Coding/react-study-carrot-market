import { selector, selectorFamily, useRecoilValue } from 'recoil';
import axios from 'axios';
import { itemListFilterState, itemListState } from './atom';
export const getItemListState = selector({
  key: 'getItemListState',
  get: async ({ get }) => {
    const response = await axios.get('http://localhost:3001/items');
    const itemList = response.data;
    const filter = get(itemListFilterState);
    console.log(itemList);
    console.log(filter);
    return itemList;
    // switch (filter) {
    //   case filter:
    //     return itemList.filter(item => item.category === filter);
    //   case 'show All':
    //     return itemList;
    //   default:
    //     return undefined;
    // }
  },
  set: ({ set }, newValue) => {
    set(itemListState, newValue);
  },
});

// export const filteredCategoryListState = selector({
//   key: 'filteredCategoryListState',
//   get: ({ get }) => {
//     const filter = get(itemListFilterState);
//     const list = get(itemListState);

//     switch (filter) {
//       case filter:
//         return list.filter(item => item.category === filter);
//       default:
//         return list;
//     }
//   },
//   set: ({ set }, newValue) => {
//     set(itemListState, newValue);
//   },
// });
// export const itemListStatsState = selector({
//   key: 'todoListStatsState',
//   get: ({ get }) => {
//     const itemList = get(itemListState);
//     const totalNum = itemList.length;
//     const totalCompletedNum = itemList.filter(item => item.category).length;

//     return {
//       totalNum,
//       totalCompletedNum,
//     };
//   },
// });
