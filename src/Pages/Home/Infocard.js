import React from 'react';

const Infocard = ({ img }) => {
    return (
        <div class='card lg:card-side bg-base-100 shadow-xl'>
            <figure>
                <img src={img} alt='Album' />
            </figure>
            <div class='card-body text-white'>
                <h2 class='card-title'>New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class='card-actions justify-end'></div>
            </div>
        </div>
    );
};

export default Infocard;
