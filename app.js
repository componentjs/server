
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

app.use(express.basicAuth('tobi', 'ferret'));
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/repos'));

app.listen(3000);
console.log('Component server listening in port 3000');