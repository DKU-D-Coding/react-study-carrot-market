import { selector } from 'recoil';
import { itemListState, itemListFilterState } from './atom';
export const getItemListState = selector({
  key: 'getItemListState',
  get: ({ get }) => {
    const itemList = get(itemListState);
    const filter = get(itemListFilterState);
    console.log(itemList);
    return itemList;
    // if (filter === 'Show All') {
    //   return itemList;
    // } else if (filter) {
    //   return itemList.filter(item => item.category === filter);
    // } else {
    //   return undefined;
    // }

    // switch (filter) {
    //   case filter:
    //     return itemList.filter(item => item.category === filter);
    //   case 'Show All':
    //     return itemList;
    //   default:
    //     return itemList;
    // }
  },
  set: ({ set }, newValue) => set(itemListState, newValue),
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
