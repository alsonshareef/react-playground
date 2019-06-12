import React, { Component } from "react";
import "./App.css";
import { Person } from "./components/Person/Person";

export default class App extends Component {
	// Main app component state.
	state = {
		persons: [{ name: "Alson", age: 23, hobbies: "Web Development" }],
		showPersons: false
	};

	// 1. Toggles name to fullname and firstname when clicked.
	clickNameHandler = newName => {
		if (this.state.persons[0].name === "Alson") {
			this.setState({
				persons: [
					{
						name: newName,
						age: 23,
						hobbies: "Web Development"
					}
				]
			});
		} else {
			this.setState({
				persons: [
					{
						name: "Alson",
						age: 23,
						hobbies: "Web Development"
					}
				]
			});
		}
	};

	// 2. Input change handler for changing UI based on input value.
	inputChangeHandler = e => {
		this.setState({
			persons: [
				{
					name: e.target.value,
					age: 23,
					hobbies: "Web Development"
				}
			]
		});
	};

	// 3. Toggles the display of Person components
	togglePersonsHandler = () => {
		const isShowing = this.state.showPersons;
		this.setState({ showPersons: !isShowing });
	};

	// Main app render method.
	render() {
		// Style object to be passed as inline styles to buttons.
		const buttonStyles = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer"
		};

		// Evaluation of state.showPersons before setting 'persons' variable to Persons list or not
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return (
							<Person
								clickName={this.clickNameHandler.bind(
									this,
									"Alson Shareef"
								)}
								nameChange={this.inputChangeHandler}
								name={person.name}
								age={person.age}
							>
								Hobbies: {person.hobbies}
							</Person>
						);
					})}
				</div>
			);
		}

		// Main App component template
		return (
			<div className="App">
				<h1>React App</h1>
				<p>This is my first React App.</p>
				<div>
					<button
						style={buttonStyles}
						onClick={this.togglePersonsHandler}
					>
						{this.state.showPersons ? "Hide" : "Show"}
					</button>
				</div>
				{persons}
			</div>
		);
	}
}
