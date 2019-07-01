import React, { useEffect, useRef, useContext } from "react";
import classes from "./Header.css";
import AuthContext from "../../context/auth-context";

const Header = props => {
	// Reference variable for togglePerson button.
	const togglePersonsRef = useRef(null);

	// AuthContext object retrieved by useContext hook.
	const authContext = useContext(AuthContext);

	// Mounting
	useEffect(() => {
		console.log("[Header.js] MOUNT useEffect");
		togglePersonsRef.current.focus();
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
				ref={togglePersonsRef}
				className={
					props.showPersons ? classes.buttonRed : classes.buttonBlue
				}
				onClick={props.togglePersons}
			>
				{props.showPersons ? "Hide" : "Show"}
			</button>
			<button className={classes.login} onClick={authContext.login}>
				{authContext.authenticated ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default React.memo(Header);
