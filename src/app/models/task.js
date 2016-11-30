// task.js

import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: "unknown task",
    description: "place holder description"
  },
  initialize: function() {
    console.log("Created a new task with title " + this.title);
  }

});


export default Task; 
