requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "q": "../lib/bower_components/q/q",
    "packery": "../lib/bower_components/packery",
    "react": "../lib/bower_components/react/react.min",
    "react-tap-event-plugin": "../lib/bower_components/react-tap-event-plugin/",
    "material-ui": "../lib/bower_components/material-ui"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {exports: "Firebase"}
  }
});

requirejs(["dependencies", "load-data", "save-data", "reviews"], function(dependencies, loadData, saveData, reviews){

});