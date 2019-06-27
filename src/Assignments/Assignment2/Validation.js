import React from "./node_modules/react";

const Validation = ({ textLength }) => {
	let validation;

	if (textLength < 5) {
		validation = "Text too short..";
	} else if (textLength > 10) {
		validation = "Text too long!";
	} else {
		validation = "Text long enough";
	}

	return <em style={{ display: "block" }}>{validation}</em>;
};

export default Validation;
