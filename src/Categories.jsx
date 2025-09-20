import React, { use, useState } from 'react';
import Category from './Category';

const Categories = ({foodPromise}) => {
    const [showBuyFood, setShowBuyFood] = useState([]);
    const handleShowBuyFood = (category)=>{
        setShowBuyFood([...showBuyFood, category])
    }
    const categoriesData = use(foodPromise)
     const categories = categoriesData.categories;
    
    return (
        <div>
            <h1 className='text-2xl font-bold'>All foods item {categories.length}</h1>
            <h3 className='text-xl font-semibold'>Show Buy food item:{showBuyFood.length} </h3>
            <ol>
                 {
                    showBuyFood.map(category=> <li key={category.idCategory} className='text-xl font-semibold'>{category.strCategory}</li>
                        
                    )
                }
            </ol>
            <div className='flex'>
                
                {
                    showBuyFood.map((category, index)=> <img className='w-32' key={index} src={category.strCategoryThumb}></img>)
                }
            </div>
            <div className='grid grid-cols-3 gap-4 w-7xl mx-auto my-10'>
                {
                    categories.map(category=> <Category key={category.idCategory} category={category}
                    handleShowBuyFood={handleShowBuyFood}
                    
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;