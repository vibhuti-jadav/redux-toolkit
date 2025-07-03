import React from 'react';

const Card = ({img, name}) => {
    return (
            <div className='flex gap-3 m-2 items-center shadow shadow-gray-500 rounded-md'>
                        <img src={img} className='w-10 rounded-full shadow ' />
                        <b>{name}</b>
            </div>
    );
}

export default Card;