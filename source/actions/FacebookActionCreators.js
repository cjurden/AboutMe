var AppDispatcher = require('../dispatcher/AppDispatcher');
//var FB = require('fb');
var APP_ID = 158314934534044;//need to get app id from facebook.

var FacebookActionCreators = {
  initFacebook: function () {
    window.fbAsyncInit = function () {
      FB.init({
        appId: APP_ID,
        xfbml: true,
        version: 'v2.5'
      });

      FacebookActionCreators.getFacebookProfilePicture();
    },

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  getFacebookProfilePicture: function () {
    console.log("getting profile picture");
    AppDispatcher.dispatch({
      type: 'getting_picture',
      data: null
    });
//this is the api call!!!

    window.FB.api('/10205179870438841/picture?type=large',
    function(response) {
      console.log("setting profile picture " + response.data.url);
      AppDispatcher.dispatch({
        type: 'received_picture',
        data: response.data.url
      });
    });
  }
}

module.exports = FacebookActionCreators;
