import axios from 'axios';
export const getItems = async () => {
  const response = await axios.get('http://localhost:3001/items');
  return response.data;
};
// export const postItems = async object => {
//   axios.post('http://localhost:3001/items', object).then(response => {
//     console.log(response);
//   });
// };
// export const deleteItem = async (id) => {
//   axios.delete('')
// }

export const getItemBySlug = async itemSlug => {
  console.log(itemSlug);
  const response = await axios.get('http://localhost:3001/items');
  const itemBySlug = response.data;
  console.log(itemBySlug);
  return itemBySlug.find(item => item.slug === itemSlug);
};

export const getUserProductList = async nickName => {
  console.log(nickName);
  const response = await axios.get('http://localhost:3001/items');
  const itemList = response.data;
  const userProductList = itemList.filter(mockItem => mockItem.nickName === nickName);
  return userProductList;
};
