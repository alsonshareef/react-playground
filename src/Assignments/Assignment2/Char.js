import React from "./node_modules/react";

const Char = ({ char, deleteChar }) => {
	const charStyle = {
		display: "inline-block",
		padding: "16px",
		margin: "16px",
		textAlign: "center",
		border: "1px solid black"
	};
	return (
		<div style={charStyle} onClick={deleteChar}>
			{char}
		</div>
	);
};

export default Char;
