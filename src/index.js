var str = require('./constants');
var $ = require('jquery');
require('./less'); //index.js модно не указывать так как вебпак автоматом в папке ищит index файл
console.log('33333333');// eslint-disable-line
var App = function (){
    console.log(str); // eslint-disable-line
    $('body').html('<div class="b-test"><h3 class="b-test__heading">My simple text Evgan str = '+str+'<div> </div></h3></div>');
};
var app = new App();
app.get = function () {};