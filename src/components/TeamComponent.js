import React from 'react';
import AJ from '../images/AJ.png/.';
import DIVE from '../images/Div.png/.';
import RUN from '../images/Run.png/.';
import LOOSU from '../images/Loosifer.jpeg/.';
import './Team.css/.';

function Team() {
	return (
		<div className="team">
			
			<h1> Our Members</h1>
			<div class="card-group2">

			<div className="card2">
    
    <div className="card-body2">
	<h4 className="card-text2">AJAY KUMAR</h4>
    <img className="card-img img1" src={AJ} alt="Card image"  />
	</div>
      </div>
			
	  <div className="card2">
    
    <div className="card-body2">
	<h4 className="card-text2">ARUN KUMAR</h4>
    <img className="card-img img1" src={RUN} alt="Card image"  />
      </div>
      </div>

	  <div className="card2">
    
    <div className="card-body2">
	<h4 className="card-text2">DIVYA</h4>
    <img className="card-img img1" src={DIVE} alt="Card image"  />
 </div>
      </div>

	  <div className="card2">
    
    <div className="card-body2">
	<h4 className="card-text2">DIVYASHREE</h4>
    <img className="card-img img1" src={LOOSU} alt="Card image"  />
     </div>
      </div>
		</div>
		</div>
	);
}

export default Team;
