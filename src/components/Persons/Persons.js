import React from "react";
import Person from "./Person/Person";

// Generates a list of Person components based on state.persons array.
const Persons = props =>
	props.persons.map((person, index) => {
		return (
			<Person
				name={person.name}
				age={person.age}
				nameChange={e => props.nameChange(e, person.id)}
				deletePerson={() => props.deletePerson(index)}
				key={person.id}
			>
				Hobbies: {person.hobbies}
			</Person>
		);
	});
export default Persons;
