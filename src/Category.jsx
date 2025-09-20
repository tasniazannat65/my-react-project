import React from 'react';

const Category = ({category}) => {
    
    return (
        <div className=' p-4 rounded-xl shadow-sm space-y-4'>
           <img className='w-full mx-auto rounded-lg' src={category.strCategoryThumb} alt="" />
           <h3 className='text-xl font-bold'>{category.strCategory}</h3>
           <p className='font-medium text-lg'>{category.strCategoryDescription}</p>
            
        </div>
    );
};

export default Category;


