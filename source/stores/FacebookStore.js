var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var Picture = null;

function setPicture(picture) {
  Picture = picture;
}

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
  getPicture: function () {
    return Picture;
  }
});
//look at facebook api example using react and flux
function handleAction (action) {
  if (action.type === '')
}
