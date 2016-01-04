var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

//with flux
ReactDOM.render(<Application />, document.getElementById('react-app'));

//without flux
//ReactDOM.render(<Application fb={FB}/>, document.getElementById('react-app'));
