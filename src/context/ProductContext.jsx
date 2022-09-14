import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase';
import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  //  useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(async () => {
    const categoryMap = await getCategoriesAndDocuments('categories');
    console.log(categoryMap);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};