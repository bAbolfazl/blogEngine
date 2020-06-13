import React from 'react';

import './authorItem.styles.css'

const AuthorItem = ({ img, name }) => {
    return (
        <div className='author-item'>

            <div className="author-item__single d-flex flex-column align-items-center justify-content-center">
                <div style={{ width: '50px' }}>
                    <img src={img} width='100%' alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                </div>
            </div>

        </div>
    );
};

export default AuthorItem;