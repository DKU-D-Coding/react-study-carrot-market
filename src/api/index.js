import axios from 'axios';
export const getItems = async () => {
  const response = await axios.get('http://localhost:3001/items');
  console.log(response.data);
  return response.data;
};

export const getItemBySlug = async itemSlug => {
  const data = await getItems();
  return data.find(item => item.slug === itemSlug);
};

export const getUserProductList = async nickName => {
  const data = await getItems();
  const userProductList = data.filter(mockItem => mockItem.nickName === nickName);
  console.log(nickName);
  return userProductList;
};
