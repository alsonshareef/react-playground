import React from "react";

export default function UserInput(props) {
	return (
		<div>
			<input value={props.currentUser} onChange={props.changeUser} />
		</div>
	);
}
