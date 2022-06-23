export enum LocalStorageKey {
  PRODUCTS = 'products',
  CART = 'cart',
}

export const setData = (listKey: LocalStorageKey, data: any) => {
  return window.localStorage.setItem(listKey, JSON.stringify(data));
};

export const getData = (listKey: LocalStorageKey) => {
  return JSON.parse(localStorage.getItem(listKey) || '');
};
