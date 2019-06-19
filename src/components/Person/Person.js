import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = ({ name, age, nameChange, deletePerson, children }) => {
	const style = {
		"@media(min-width: 500px)": {
			width: "450px"
		}
	};
	return (
		<div className="person" style={style}>
			<p>My name is {name}.</p>
			<input onChange={nameChange} value={name} />
			<p>I am {age} years old.</p>
			<p>{children}</p>
			<button onClick={deletePerson}>Delete</button>
		</div>
	);
};

export default Radium(Person);
