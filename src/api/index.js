import mock from '../mock.json';
export const getItemBySlug = itemSlug => {
  return mock.find(item => item.slug === itemSlug);
};

export const getUserProductList = nickName => {
  const userProductList = mock.filter(mockItem => mockItem.nickName === nickName);
  console.log(nickName);
  return userProductList;
};
