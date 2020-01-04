const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

$.ajax({
  type: "POST",
  url: "/Final.py",
  data: {param: 'python'}
}).done(function(getWeather) {
   // do something
   console.log(getWeather('臺中市'));
});