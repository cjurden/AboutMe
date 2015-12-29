var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var FB = require('fb');
//var Social = require('./Social.react');

var Application = React.createClass({
  render: function () {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    );
  }
});

module.exports = Application;
//
//style={{textAlign: center}}
