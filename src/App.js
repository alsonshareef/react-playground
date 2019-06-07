import React, { Component } from "react";
import "./App.css";
import Person from "./People/Person";

export default class App extends Component {
	// Main app component state.
	state = {
		persons: [{ name: "Alson", age: 23, hobbies: "Web Development" }],
		buttonName: "Beep"
	};

	// Click handler example which changes the apps state.
	clickHandler = () => {
		if (this.state.buttonName === "Beep") {
			this.setState({ buttonName: "Bloop" });
		} else {
			this.setState({ buttonName: "Beep" });
		}
	};

	// Main app render method.
	render() {
		return (
			<div className="App">
				<h1>React App</h1>
				<button onClick={this.clickHandler}>Click Me</button>
				<button>{this.state.buttonName}</button>
				<p>This is my first React App.</p>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				>
					Hobbies: {this.state.persons[0].hobbies}
				</Person>
			</div>
		);
	}
}
