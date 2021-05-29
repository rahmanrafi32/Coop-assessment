import React from "react";
import imgPrincipal from '../../../Images/principal1.jpg';
import "./OurPrincipal.css";
const OurTeacher = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-5">
            <img src={imgPrincipal} alt="Our Principal" style={{width:"100%", height:"90%"}}/>
            </div>
            <div class="col-sm-7 principal-intro">
					<h3>MEET OUR PRINCIPAL</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<h6 class="principal-name">Mr JOHN DOE, M.D, P.C</h6>
					<div>
						<button class="know-more-btn">KNOW MORE</button>
					</div>
				</div>
        </div>
    </div>
  );
};

export default OurTeacher;
