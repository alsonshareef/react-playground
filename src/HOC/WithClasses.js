/**
 * Example of a Higher Order Component that also wraps its children with classes.
 */

import React from "react";

const withClasses = (WrappedComponent, className) => {
	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClasses;
