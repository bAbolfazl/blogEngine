import React from 'react';

import './postPrev.styles.css'

const PostPrev = ({img, prev, text, title}) => {
    return (
        <div className='post-prev mb-5'>
            <div className="post-prev__post-single">
                <div className="post-prev__post-single__img">
                    <img src={img} width='100%' height='100%' alt="post img" />
                </div>
                <div className="post-prev__post-single__prev">
                    {
                        prev = text.split(' ').map((text, i) => {
                            if (i < 50) { return `${text} ` }
                        })

                    }...
                                        </div>
                <div className="post-prev__post-single__prev">

                </div>
            </div>

            <div>
                <button className='btn btn-outline-primary w-100'>
                    {title}
                </button>
            </div>
        </div>
        // </div>
    );
};

export default PostPrev;