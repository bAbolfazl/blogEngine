import React from 'react';

import './catItem.styles.css'

const CatItem = ({ name, img }) => {
    // console.log(name)
    return (
        <div className='cat-item'>
            <div className='cat-item__category-single d-flex align-items-center mb-4 justify-content-between border-bottom'>
                <div className="cat-item__category-img">
                    <img src={img} width='100%' height='100%' alt={name} />
                </div>
                <div className="cat-item__category-name mr-4">
                    {name}
                </div>
            </div>
        </div>
    );
};

export default CatItem;