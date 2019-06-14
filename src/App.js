import React, { Component } from "react";
import "./App.css";
import { Person } from "./components/Person/Person";

export default class App extends Component {
	// Main app component state.
	state = {
		persons: [
			{ name: "Alson Shareef", age: 23, hobbies: "Web Development" },
			{ name: "John Doe", age: 34, hobbies: "UX/UI and Web Design" }
		],
		showPersons: false
	};

	// 1. Toggles the display of Person components
	togglePersonsHandler = () => {
		const isShowing = this.state.showPersons;
		this.setState({ showPersons: !isShowing });
	};

	// 2. Deletes a person from app state.
	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	// 3. Input change handler for changing UI based on input value.
	inputChangeHandler = e => {
		this.setState({
			persons: [
				{ name: "Alson Shareef", age: 23, hobbies: "Web Development" },
				{
					name: e.target.value,
					age: 34,
					hobbies: "UX/UI and Web Design"
				}
			]
		});
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
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								nameChange={this.inputChangeHandler}
								deletePerson={() =>
									this.deletePersonHandler(index)
								}
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
