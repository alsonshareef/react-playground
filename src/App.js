import React, { Component } from "react";
import "./App.css";
import { Person } from "./components/Person/Person";

export default class App extends Component {
	// Main app component state.
	state = {
		persons: [{ name: "Alson", age: 23, hobbies: "Web Development" }],
		buttonName: "Beep"
	};

	// 1. Click handler example which changes the apps state.
	clickButtonHandler = () => {
		if (this.state.buttonName === "Beep") {
			this.setState({ buttonName: "Bloop" });
		} else {
			this.setState({ buttonName: "Beep" });
		}
	};

	// 2. Toggles name to fullname and firstname when clicked.
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

	// 3. Input change handler for changing UI based on input value.
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

		return (
			<div className="App">
				<h1>React App</h1>
				<p>This is my first React App.</p>
				<div>
					<button
						style={buttonStyles}
						onClick={this.clickButtonHandler}
					>
						Click Me
					</button>
					<input readOnly value={this.state.buttonName} />
				</div>
				<Person
					clickName={this.clickNameHandler.bind(
						this,
						"Alson Shareef"
					)}
					nameChange={this.inputChangeHandler}
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				>
					Hobbies: {this.state.persons[0].hobbies}
				</Person>
			</div>
		);
	}
}
