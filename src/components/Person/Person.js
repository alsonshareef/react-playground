import React from "react";
import "./Person.css";

export const Person = props => {
	return (
		<div className="person">
			<p onClick={props.clickName}>My name is {props.name}.</p>
			<input onChange={props.nameChange} value={props.name} />
			<p>I am {props.age} years old.</p>
			<p>{props.children}</p>
		</div>
	);
};
