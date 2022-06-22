import { LocalStorageKey, setData } from "./base.js";
export const initData = () => {
    const data = [
        {
            id: 1,
            name: "T-Shirt Summer Vibes",
            image_url: "./image/product-1.png",
            salePrice: 119.99,
            price: 130.25,
            discount: 30,
        },
        {
            id: 2,
            name: "Loose Knit 3/4 Sleeve",
            image_url: "./image/product-2.png",
            salePrice: 0,
            price: 119.99,
            discount: 0,
        },
        {
            id: 3,
            name: "Basic Slim Fit T-Shirt",
            image_url: "./image/product-3.png",
            salePrice: 0,
            price: 79.99,
            discount: 0,
        },
        {
            id: 4,
            name: "Loose Textured T-Shirt",
            image_url: "./image/product-4.png",
            salePrice: 0,
            price: 119.99,
            discount: 0,
        },
    ];
    setData(LocalStorageKey.PRODUCTS, data);
    // window.localStorage.setItem("products", JSON.stringify(data));
};
