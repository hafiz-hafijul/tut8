import React from 'react';
import ImgSrc from "../images/IMG20211204131441.jpg";

const Slide = () => {
    return (
        <div>
            <div className='img'>
                <img src={ImgSrc} alt='img'/>
            </div>
        </div>
    )
}

export default Slide;
