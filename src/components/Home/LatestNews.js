import { faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NewsCard from './NewsCard';


const LatestNews = () => {
    return (

        <div className='text-center mt-5'>
            <p className='text-secondary  fw-bold' > <FontAwesomeIcon icon={faStar} /> WE ARE BEST  <FontAwesomeIcon icon={faStar} /> </p>
            <h1 className='text-success my-2  fw-bold'>LATEST NEWS</h1>
            <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <NewsCard></NewsCard>
            <br /><br />
            <button type="button" style={{ width: "15rem" }} class="btn mb-4 btn-success btn-lg"> <FontAwesomeIcon icon={faPaperPlane} /> VIEW ALL </button>
        </div>
    );
};

export default LatestNews;