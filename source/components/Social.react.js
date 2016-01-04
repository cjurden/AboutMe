var React = require('react');
var Facebook = require('./Facebook.react');
//var Twitter = require('./Twitter.react');
var FacebookActionCreators = require('../actions/FacebookActionCreators');

var Social = React.createClass({

  render: function () {
    return (
      <div className="container fluid">
        <div className="row">
          <div>
            <Facebook />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Social;

/*
<div className="col-md-4">
  <Twitter />
</div>

*/
