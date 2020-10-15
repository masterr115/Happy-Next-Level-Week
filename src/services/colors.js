'use strict';

const colors = require('colors');

/*
##### Color's (LOG)
*/

colors.setTheme({
    success: ['brightGreen'],
    warn: ['brightYellow'],
    error: ['brightRed']
});

module.exports = colors;