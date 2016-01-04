var React = require('react');
var FacebookActionCreators = require('../actions/FacebookActionCreators');

var imgStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

var FacebookPicture = React.createClass({
  render: function () {
    return (
      <div>
        <img className="img-circle" style={imgStyle} src={this.props.facebookPictureUrl}></img>
      </div>
    );
  }
});

module.exports = FacebookPicture;
