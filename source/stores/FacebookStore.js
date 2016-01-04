var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var facebookPictureData = null;

function emitChange() {
    FacebookStore.emit('change');
}

var FacebookStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

//this is where we can check for login credentials and act accordingly.
  getPictureUrl: function () {
    return this.facebookPictureData.url;
  },

  setFacebookPictureData: function (type, data) {
    this.facebookPictureStatus = type;

    if (data) {
      this.facebookPictureData = data
    } else {
      this.facebookPictureData = {};
    }

    emitChange();
  },
});
//look at facebook api example using react and flux

function handleAction (action) {
  if (action.type === 'getting_picture') {
    FacebookStore.setFacebookPictureData(action.type, action.data);
    emitChange();
  }

  if (action.type === 'received_picture') {
    console.log("store received picture, setting data");
    FacebookStore.setFacebookPictureData(action.type, action.data);
    emitChange();
  }
}

FacebookStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = FacebookStore;
