import React from "react";
import "./Person.css";

export const Person = ({ name, age, nameChange, deletePerson, children }) => {
	return (
		<div className="person">
			<p>My name is {name}.</p>
			<input onChange={nameChange} value={name} />
			<p>I am {age} years old.</p>
			<p>{children}</p>
			<button onClick={deletePerson}>Delete</button>
		</div>
	);
};
