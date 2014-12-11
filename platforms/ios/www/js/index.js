/*
 * index.js
 * Richard.Benentt.cti@gmail.com
 *
 */
var app = {
    // Application Constructor
    initialize: function() {
      $('#stats #width').html(window.innerWidth);
      $('#stats #height').html(window.innerHeight);
      $('#stats #density').html(window.devicePixelRatio);
      this.bindEvents();
    },
    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    }
};
