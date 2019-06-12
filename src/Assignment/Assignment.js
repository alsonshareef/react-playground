import React, { Component } from "react";
import "../App.css";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

export default class Assignment extends Component {
	state = {
		username: "alsonshareef"
	};

	usernameChangeHandler = e => {
		this.setState({
			username: e.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Assignment</h1>
				<UserInput
					currentUser={this.state.username}
					changeUser={this.usernameChangeHandler}
				/>
				<UserOutput username={this.state.username} />
			</div>
		);
	}
}
