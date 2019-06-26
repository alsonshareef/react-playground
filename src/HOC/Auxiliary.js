/**
 * Example of a Higher Order Component; only takes in 'props' and 'key' arguments and used to accomodate adjacent JSX element rendering at root level.
 */

const Aux = props => props.children;

export default Aux;
