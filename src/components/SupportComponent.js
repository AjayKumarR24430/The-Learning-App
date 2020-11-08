import React, { useState } from 'react';
import SimpleForm from './SimpleForm';

const Support = (props) => {
	let [showChat, setShowChat] = useState(false);
  
	const startChat = () => { setShowChat(true); }
	const hideChat = () => { setShowChat(false); }
  
	return (
		<>
		<div className="support">
			<h1> Help Section</h1>
		</div>
		<div className = "bot">

		<div style ={{display: showChat ? "" : "none"}}>
		<SimpleForm></SimpleForm>
		</div>      
		{/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
		<div>
		{!showChat 
			? <button className="btn btn-danger" onClick={() => startChat()}><i class="fa fa-comment"></i></button> 
			: <button className="btn btn-danger" onClick={() => hideChat()}><i class="fa fa-comment"></i></button>}
		</div>
	</div>

	</>
	);
}

export default Support;
