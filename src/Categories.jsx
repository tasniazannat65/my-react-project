import React, { use } from 'react';
import Category from './Category';

const Categories = ({foodPromise}) => {
    const categoriesData = use(foodPromise)
     const categories = categoriesData.categories;
    
    return (
        <div>
            <h1>All foods item</h1>
            <div className='grid grid-cols-3 gap-4 w-7xl mx-auto my-10'>
                {
                    categories.map(category=> <Category key={category.idCategory} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;