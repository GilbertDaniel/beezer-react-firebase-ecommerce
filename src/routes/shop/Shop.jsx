import React, {useContext} from 'react'
import { CategoriesContext } from '../../context/CategoriesContext';
import './shop.styles.scss';
import CategoryPreview from './../../components/category-preview/CategoryPreview';
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop