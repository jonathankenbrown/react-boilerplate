var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // obj destructuring



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');  // adding SASS loader

ReactDOM.render(
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')

    );
