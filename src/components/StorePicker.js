import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	//using constructor to bind this
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }
	myInput = React.createRef();

	//Declear a property to bind this instead of declear a method
	goToStore = event => {
	// goToStore(event) {
		// 1. Stop the form from submitting
		event.preventDefault();
		// 2. get the text from the input
		const storeName = this.myInput.value.value;
		// 3. change the page to /store/input
		this.props.history.push(`/store/${storeName}`);

	}
	render() {
		return (
			<Fragment>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter a Store</h2>
					<input
						type="text"
						ref={this.myInput}
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store -></button>
				</form>
			</Fragment>
		);
	}
}

export default StorePicker;