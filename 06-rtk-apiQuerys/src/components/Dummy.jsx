import React from 'react';
import Recipe from './Recipe';
import Products from './Products';
import Posts from './Posts';
import Users from './Users';

const Dummy = () => {
    return (
        <>
        <div className='grid grid-cols-4 gap-2 max-w-7xl mx-auto'>
            <div className='border border-gray-300'>
                <Recipe/>
            </div>
            <div className='border border-gray-300'>
                  <Products/>
            </div>
            <div className='border border-gray-300'>
                 <Posts/>
            </div>
            <div className='border border-gray-300'>
                <Users />
            </div>
          
          
          
        </div>
        </>
    );
}

export default Dummy;