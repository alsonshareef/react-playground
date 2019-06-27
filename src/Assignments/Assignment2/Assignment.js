import "../../App.css";

import Validation from "./Validation";
import Char from "./Char";

export default class Assignment extends Component {
	state = {
		text: "",
		textLength: 0
	};

	// Changes text and text length on every input change.
	textLengthHandler = e => {
		const text = e.target.value;
		const textLength = text.length;
		this.setState({
			text,
			textLength
		});
	};

	// Deletes a character of input text whenever it is clicked and updates state to display new text.
	deleteCharHandler = charIndex => {
		const text = this.state.text.split("");
		text.splice(charIndex, 1);
		const newText = text.join("");
		this.setState({ text: newText, textLength: newText.length });
	};

	render() {
		// Displays a list of Char components displaying every character in input text.
		const char = this.state.text.split("").map((char, index) => {
			return (
				<Char
					char={char}
					key={index}
					deleteChar={() => this.deleteCharHandler(index)}
				/>
			);
		});

		return (
			<div className="App">
				<h1>Assignment 2</h1>
				<input
					onChange={this.textLengthHandler}
					value={this.state.text}
				/>
				<p>Text Length: {this.state.textLength}</p>
				{this.state.textLength < 1 ? null : (
					<Validation textLength={this.state.textLength} />
				)}
				{char}
			</div>
		);
	}
}
