import React, { Component } from "react";
import classes from "./App.css";

import Header from "../components/Header/Header";
import Persons from "../components/Persons/Persons";
import withClasses from "../hoc/withClasses";
import Auxiliary from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class App extends Component {
	constructor(props) {
		console.log("[App.js] constructor");
		super(props);
		this.state = {
			persons: [
				{
					id: 1,
					name: "Alson Shareef",
					age: 23,
					hobbies: "Web Development"
				},
				{
					id: 2,
					name: "John Doe",
					age: 34,
					hobbies: "UX/UI and Web Design"
				}
			],
			showPersons: false,
			showHeader: true,
			authenticated: false
		};
	}

	/**
	 * LIFECYCLE HOOKS
	 */

	static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps", props);
		return state;
	}

	componentDidMount() {
		console.log("[App.js] componentDidMount");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("[App.js] shouldComponentUpdate");
		return true;
	}

	componentDidUpdate() {
		console.log("[App.js] componentDidUpdate");
	}

	/**
	 * EVENT HANDLERS
	 */

	// 1. Toggles the display of Person components
	togglePersonsHandler = () => {
		const isShowing = this.state.showPersons;
		this.setState({ showPersons: !isShowing });
	};

	// 2. Deletes a person from app state.
	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons });
	};

	// 3. Input change handler for changing UI based on input value.
	inputChangeHandler = (e, id) => {
		// 1. Find index of person object being changed.
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		// 2. Create copy of that person object to mutate instead of state.
		const person = {
			...this.state.persons[personIndex]
		};

		// 3. Change name prop of copied person object to input value.
		person.name = e.target.value;

		// 4. Create copy of entire persons array to mutate, and replace old person object with changed person.
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({ persons });
	};

	//4. Changes authentication status to true.
	loginHandler = () => {
		this.setState({ authenticated: !this.state.authenticated });
	};

	// Main app render method.
	render() {
		console.log("[App.js] render");

		// Evaluation of state.showPersons before setting 'persons' variable to Persons list or not
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						nameChange={this.inputChangeHandler}
						deletePerson={this.deletePersonHandler}
					/>
				</div>
			);
		}

		// Main App component template
		return (
			<Auxiliary>
				<button
					onClick={() => {
						this.setState({ showHeader: !this.state.showHeader });
					}}
				>
					Remove Header
				</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler
					}}
				>
					{this.state.showHeader ? (
						<Header
							title={this.props.appTitle}
							showPersons={this.state.showPersons}
							togglePersons={this.togglePersonsHandler}
						/>
					) : null}
					{persons}
				</AuthContext.Provider>
			</Auxiliary>
		);
	}
}

export default withClasses(App, classes.App);
