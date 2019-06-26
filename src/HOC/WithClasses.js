/**
 * Example of a Higher Order Component that also wraps its children with classes.
 */

import React from "react";

const WithClasses = props => {
	return <div className={props.classes}>{props.children}</div>;
};

export default WithClasses;
