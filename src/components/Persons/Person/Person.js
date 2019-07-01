import React from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";

import Auxiliary from "../../../hoc/Auxiliary";
import withClasses from "../../../hoc/withClasses";
import AuthContext from "../../../context/auth-context";

const Person = ({ name, age, nameChange, deletePerson, children }) => {
	console.log("[Person.js] rendering..");
	return (
		<Auxiliary>
			<AuthContext.Consumer>
				{context =>
					context.authenticated ? (
						<strong>Authenticated</strong>
					) : (
						<em>Please log in</em>
					)
				}
			</AuthContext.Consumer>
			<p>My name is {name}.</p>
			<input onChange={nameChange} value={name} />
			<p>I am {age} years old.</p>
			<p>{children}</p>
			<button onClick={deletePerson}>Delete</button>
		</Auxiliary>
	);
};

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	nameChange: PropTypes.func,
	deletePerson: PropTypes.func,
	children: PropTypes.array
};

export default withClasses(Person, classes.person);
