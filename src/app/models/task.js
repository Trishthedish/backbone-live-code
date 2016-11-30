// task.js

import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  //property is an object called defaults
  defaults: {
    title: "unknown task",
    description: "place holder description"
  },
  initialize: function() {
    // his function is called once when the model is created, and can be used to set up anything special.
    console.log("Created a new task with title " + this.title);
  }

});


export default Task;
