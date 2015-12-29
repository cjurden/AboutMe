var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>About Me</h1>
        <h3 style={{textAlign: 'center'}}>Cole Jurden</h3>
      </div>
    );
  }
});

module.exports = Header;
