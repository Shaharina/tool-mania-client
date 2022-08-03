import React from 'react';

import { Link } from 'react-router-dom';
import Banner from './banner';
import productBg from '../../assets/image/product-bg.jpg';
import ToolCard from '../Tools/ToolCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div style={{ background: `url(${productBg})`, backgroundSize: 'cover' }}>
                <div className='w-11/12 mx-auto'>
                    <h1 className='text-white text-center text-3xl font-semibold py-10'>
                        <span className='p-1 border-b-2 border-primary'>
                            Our <span className='text-primary'>Product</span>
                        </span>
                    </h1>
                    <div className='grid mx-auto grid-cols-1 lg:grid-cols-3 gap-3'>
                        {products.slice(0, 3).map(product => (
                            <ToolCard key={product._id} product={product} />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <Link to='tools' className='btn btn-primary my-5'>
                            See more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
