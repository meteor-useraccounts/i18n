// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';


var Both = ['client', 'server'];

var languages = ['de', 'en', 'fr', 'it', 'ja', 'ko', 'sv'];
var modules = ['oauth', 'title'];
var i18nFiles = [];
modules.map(function getModulePath(module) {
  var modulePath = 'i18n/' + module + '/';
  languages.map(function getFilePath(language) {
    var filePath = modulePath + language + '.i18n.json';
    i18nFiles.push(filePath);
  });
});

Package.describe({
  name: 'useraccounts:i18n',
  summary: 'UserAccounts i18n package.',
  version: '2.0.0',
  git: 'https://github.com/meteor-useraccounts/i18n.git',
});

Package.onUse(function pkgOnUse(api) {
  api.versionsFrom('1.0');

  // Logger
  api.use([
    'jag:pince@0.0.9',
    'tap:i18n@1.6.1',
    'underscore',
    'useraccounts:core@2.0.0',
  ], Both);

  api.imply([
    'useraccounts:core',
  ], Both);


  // Plugin files
  api.addFiles([
    'src/_globals.js',
    'src/logger.js',
    'src/plugins/i18n_plugin.js',
    'src/main.js',
  ], Both);

  // i18n files
  api.addFiles('useraccounts-tap.i18n', Both);
  api.addFiles(i18nFiles, Both);
});
