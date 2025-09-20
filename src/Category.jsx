import React, { useState } from 'react';

const Category = ({category, handleShowBuyFood}) => {
    const [buyFood, setBuyFood] = useState(false);
    const handleBuyFood = () => {
        setBuyFood(!buyFood)
        handleShowBuyFood(category)
    }
    
    return (
        <div className={`p-4 rounded-xl shadow-sm space-y-4 ${buyFood?'bg-purple-300':'bg-white'}`}>
           <img className='w-full mx-auto rounded-lg' src={category.strCategoryThumb} alt="" />
           <h3 className='text-xl font-bold'>{category.strCategory}</h3>
           <p className='font-medium text-lg'>{category.strCategoryDescription}</p>
           <button className='p-4 bg-yellow-500 rounded-lg cursor-pointer text-white font-bold ml-4' onClick={handleBuyFood}>
            {
                buyFood? 'Food Ordered':'Food not Ordered'
            }
           </button>
            
        </div>
    );
};

export default Category;


