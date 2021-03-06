import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TestimonyCard from './TestimonyCard';

const Testimony = () => {
    return (
        <div className=' py-5  bg-info  text-center' >
            <p className='text-light  fw-bold' > <FontAwesomeIcon icon={faStar} /> WE ARE BEST  <FontAwesomeIcon icon={faStar} /> </p>
            <h1 className='text-light my-2  fw-bold'>ACHIEVEMENT</h1>
            <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <TestimonyCard></TestimonyCard>
        </div>
    );
};

export default Testimony;