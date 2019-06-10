import React from "react";

export default function Person(props) {
	return (
		<div>
			<p onClick={props.clickName}>My name is {props.name}.</p>
			<input onChange={props.nameChange} value={props.name} />
			<p>I am {props.age} years old.</p>
			<p>{props.children}</p>
		</div>
	);
}
