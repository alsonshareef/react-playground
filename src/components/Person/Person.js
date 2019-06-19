import React from "react";
import classes from "./Person.css";

const Person = ({ name, age, nameChange, deletePerson, children }) => {
	return (
		<div className={classes.person}>
			<p>My name is {name}.</p>
			<input onChange={nameChange} value={name} />
			<p>I am {age} years old.</p>
			<p>{children}</p>
			<button onClick={deletePerson}>Delete</button>
		</div>
	);
};

export default Person;
