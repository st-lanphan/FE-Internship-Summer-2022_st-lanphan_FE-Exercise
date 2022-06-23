export var LocalStorageKey;
(function (LocalStorageKey) {
    LocalStorageKey["PRODUCTS"] = "products";
    LocalStorageKey["CART"] = "cart";
})(LocalStorageKey || (LocalStorageKey = {}));
export const setData = (listKey, data) => {
    return window.localStorage.setItem(listKey, JSON.stringify(data));
};
export const getData = (listKey) => {
    return JSON.parse(localStorage.getItem(listKey) || '');
};
