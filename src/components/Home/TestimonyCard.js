import { faClock, faGraduationCap, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TestimonyCard = () => {
    return (
        <div className=' mt-5 row d-flex justify-content-center'>
            <div className="col-md-6 px-4 text-white pt-5">
                <p className='text-white'> <span style={{ fontSize: '60px' }}><FontAwesomeIcon icon={faTrophy} /></span>  <br /> PATHSHALA won best School award in 2021 </p>
                <h1 className='fw-bold text-white'>WINNER BEST UNI AWARD</h1>
                <p className='px-5 mx-4'>It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the content.</p>
            </div>


            <div className="col-md-6 px-5 text-white mt-5">

                <h2 className='text-white'> <span style={{ fontSize: '40px' }}> <FontAwesomeIcon icon={faStar} /></span> 14+ <br />COMPETITION WON</h2>
                <p className='px-5'>It is a long established fact that <br /> a reader will be distracted.</p>
                <br /> <br />

                <h2 className='text-white'> <span style={{ fontSize: '40px' }}> <FontAwesomeIcon icon={faClock} /></span> 1000+ <br /> VOLUNTEER HOURS</h2>
                <p className='px-5'>It is a long established fact that <br /> a reader will be distracted.</p>
                <br /> <br />

                <h2 className='text-white'> <span style={{ fontSize: '40px' }}> <FontAwesomeIcon icon={faGraduationCap} /></span>100% <br /> SUCCESS RATE</h2>
                <p className='px-5'>It is a long established fact that <br /> a reader will be distracted.</p>

            </div>

        </div>
    );
};

export default TestimonyCard;