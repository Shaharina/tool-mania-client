import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Infocard img={clock}></Infocard>
            <Infocard img={clock}></Infocard>
            <Infocard img={clock}></Infocard>
        </div>
    );
};

export default Info;
