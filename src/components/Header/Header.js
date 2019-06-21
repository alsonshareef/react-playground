import React from "react";
import classes from "./Header.css";

const Header = props => {
	return (
		<div>
			<h1>React App</h1>
			<p>This is my first React App.</p>
			<button
				className={
					props.showPersons ? classes.buttonRed : classes.buttonBlue
				}
				onClick={props.togglePersons}
			>
				{props.showPersons ? "Hide" : "Show"}
			</button>
		</div>
	);
};

export default Header;
