/* global
    UserAccounts: false,
    UALog: false,
    UAi18nPlugin: false
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


UALog.trace('Adding i18n plugin');
UserAccounts.registerPlugin(new UAi18nPlugin());
