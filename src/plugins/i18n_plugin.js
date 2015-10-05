/* global
    TAPi18n: false,
    UAi18nPlugin: true,
    UALog: false,
    UAPlugin: false,
    UserAccounts: false
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading i18n_plugin.js');


// define the UAi18nPlugin class
UAi18nPlugin = function _UAi18nPlugin() {
  // Call the parent constructor
  UAPlugin.call(this);

  this._id = 'i18n';
};


// inherit UAPlugin
UAi18nPlugin.prototype = new UAPlugin();

_.extend(UAi18nPlugin.prototype, {
  // correct the constructor pointer because it points to UAModule
  constructor: UAi18nPlugin,

  oldT: UserAccounts.t,

  init: function init() {
    if (Meteor.isClient) {
      UALog.trace('Substituting UserAccounts.t method');
      UserAccounts.t = TAPi18n.__;
    }
  },

  uninit: function uninit() {
    var self = this;

    if (Meteor.isClient) {
      UALog.trace('Restoring old UserAccounts.t method');
      UserAccounts.t = self.oldT;
    }
  },
});
