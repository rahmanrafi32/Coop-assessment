import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const NewsCard = () => {
    return (

        <div className="row mt-5 d-flex justify-content-center">


            <div className="card mx-2 col-md-4" style={{ width: "18rem" }}>
                <img className='pt-3' src={"https://media.timesfreepress.com/img/photos/2016/05/27/1464399055_Business-Calendar--2-_t1070_hd064d9b66f231d85491f48c06572162a7cbd73e8.jpg"} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">ACADEMIC CALENDER</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-success"> <FontAwesomeIcon icon={faPaperPlane} /> VIEW DETAILS</button>
                </div>
            </div>
            <div className="card mx-2 col-md-4" style={{ width: "18rem" }}>
                <img className='pt-3' src={"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/students%20exams%20results%20PTI-compressed.jpg?itok=ioh9LzcW"} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">EXAM RESULTS OUT</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-success"> <FontAwesomeIcon icon={faPaperPlane} />  VIEW DETAILS</button>
                </div>
            </div>
            <div className="card mx-2 col-md-4" style={{ width: "18rem" }}>
                <img className='pt-3' src={"https://lolhs.pasco.k12.fl.us/wp-content/uploads/lolhs/2016/11/Exam-Alert.jpeg"} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">EXAM DATES</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's.</p>
                    <button type="button" class="btn btn-outline-success" > <FontAwesomeIcon icon={faPaperPlane} /> VIEW DETAILS</button>
                </div>
            </div><br />
           
        </div>

    );
};

export default NewsCard;