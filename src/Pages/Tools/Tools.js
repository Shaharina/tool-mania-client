import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ToolCard from './ToolCard';

const Tools = () => {
    const { data: products } = useQuery('products', () => fetch('https://toolmine-app.herokuapp.com/products').then(res => res.json()));

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-white text-center text-3xl font-semibold mt-10'>
                <span className='p-1 border-b-2 border-primary'>
                    Our <span className='text-primary'>Products</span>
                </span>
            </h1>
            <h2 className='text-xl text-center mt-5 mb-10 text-white font-semibold'>Total Items: {products.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {products.map(product => (
                    <ToolCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Tools;
