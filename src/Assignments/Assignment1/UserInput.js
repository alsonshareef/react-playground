import React from "./node_modules/react";

export default function UserInput(props) {
	return (
		<div>
			<input value={props.currentUser} onChange={props.changeUser} />
		</div>
	);
}
