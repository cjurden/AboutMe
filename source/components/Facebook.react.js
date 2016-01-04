var React = require('react');
var FacebookStore = require('../stores/FacebookStore');
var FacebookPicture = require('./FacebookPicture.react');
var FacebookActionCreators = require('../actions/FacebookActionCreators');

var Facebook = React.createClass({

  getInitialState: function () {
    return this.getFacebookState();
  },

  getFacebookState: function () {
    return {
      facebookPictureStatus: FacebookStore.facebookPictureStatus,
      facebookPictureUrl: FacebookStore.facebookPictureData
    }
  },

  componentDidMount: function () {
      FacebookActionCreators.initFacebook();
      FacebookStore.addChangeListener(this.onFacebookChange);
  },

  componentWillUnmount: function () {
    FacebookStore.removeChangeListener(this.onFacebookChange);
  },

  onFacebookChange: function () {
    this.setState(
      this.getFacebookState()
    );
  },

  render: function () {
    return (
        <FacebookPicture facebookPictureUrl={this.state.facebookPictureUrl} facebookPictureStatus={this.state.facebookPictureStatus} />
    );
  }
});

module.exports = Facebook;
