'use strict';

require('jquery');
require('underscore');

var ajs = require('./modules/_a.js')();
var bjs = require('./modules/_b.js')();

$(document).ready(function() {
    console.log(ajs);
    console.log(bjs);

    _.each(bjs, function(element){
        console.log(element);
    });
});
