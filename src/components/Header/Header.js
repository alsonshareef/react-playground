import React, { useEffect } from "react";
import classes from "./Header.css";

const Header = props => {
	// Mounting
	useEffect(() => {
		console.log("[Header.js] MOUNT useEffect");
		return () => {
			console.log("[Header.js] UNMOUNTING useEffect CLEANUP");
		};
	}, []);

	// Updating
	useEffect(() => {
		console.log("[Header.js] UPDATING useEffect");
		return () => {
			console.log("[Header.js] UPDATING useEffect CLEANUP");
		};
	});

	return (
		<div>
			<h1>{props.title}</h1>
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

export default React.memo(Header);
