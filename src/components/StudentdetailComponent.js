import React from 'react';

import { studentdetail } from '../shared/studentdetail';
import MA from '../images/mavatar.png/.';

function Studentdetails() {
	return (
		<div className="col-sm studentdetails">
			<img src={MA} />
			<br/>
			<div className="card-group4">
		<div className="card-group3">
		<label> Name</label>
		<input type="text" value={studentdetail[0].name} readonly /><br/>
		<label >Email</label>
		<input type="email" value={studentdetail[0].email} readonly /><br/>
		<label > ID</label>
		<input type="number" value={studentdetail[0].identity} readonly/><br/>
		</div>
		<div calssNmae="card-group3">		
		<label> Sex</label>
		<input type="text" value={studentdetail[0].sex} readonly /><br/>
		<label> School</label>
		<input type="text" value={studentdetail[0].school} readonly /><br/>
		<label> Courses
			<br />
			{studentdetail[0].course1}
						
						{studentdetail[0].course2}</label> <br/>
		
	
		
	
					


</div>
</div>

					
			
			</div>
	);
}

export default Studentdetails;
