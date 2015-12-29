var React = require('react');
var Facebook = require('./Facebook.react');
var Twitter = require('./Twitter.react');

var Social = React.createClass({
  render: function () {
    return (
      <div className="container fluid">
        <div className="row">
          <div className="col-md-offset-2 col-md-4">
            <Facebook />
          </div>
          <div className="col-md-4">
            <Twitter />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Social;
