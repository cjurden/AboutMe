var React = require('react');
var Footer = require('./Footer.react');

var Application = React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="page-header">
          <h1 style={{textAlign: 'center'}}>About Me</h1>
          <h3 style={{textAlign: 'center'}}>Cole Jurden</h3>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Application;
//
//style={{textAlign: center}}
