import React, { Component } from "react";
import Person from "./Person/Person";

// Generates a list of Person components based on state.persons array.
class Persons extends Component {
	constructor(props) {
		super(props);
		console.log("[Persons.js] constructor");
	}

	/**
	 * LIFECYCLE HOOKS
	 */

	// ** Unable to use this hook because there is no initial state within this class **
	// static getDerivedStateFromProps(props, state) {
	// 	console.log("[Persons.js] getDerivedStateFromProps", props);
	// 	return state;
	// }

	componentDidMount() {
		console.log("[Persons.js] componentDidMount");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("[Persons.js] shouldComponentUpdate");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[Persons.js] getSnapshotBeforeUpdate");
		return "Snapshot!";
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(snapshot);
		console.log("[Persons.js] componentDidUpdate");
	}

	render() {
		console.log("[Persons.js] rendering..");
		return this.props.persons.map((person, index) => {
			return (
				<Person
					name={person.name}
					age={person.age}
					nameChange={e => this.props.nameChange(e, person.id)}
					deletePerson={() => this.props.deletePerson(index)}
					key={person.id}
				>
					Hobbies: {person.hobbies}
				</Person>
			);
		});
	}
}

export default Persons;
