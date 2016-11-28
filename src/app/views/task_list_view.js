// task_list_views.js
//  we need to import our new files where they're need
import $ from 'jquery';

import Backbone from 'backbone';

import _ from 'underscore';


import TaskView from 'app/views/task_view';
//To provide this structure, let's create a view for the entire app, a TaskListView

var TaskListView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of tasks
    this.taskData = options.taskData;

    // Compile a template to be shared between the individual tasks
    this.taskTemplate = _.template($('#task-template').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.task-list');

    // Create a TaskView for each task
    this.cardList = [];
    this.taskData.forEach(function(task) {
      var card = new TaskView({
        task: task,
        template: this.taskTemplate
      });
      this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach
  },
  render: function() {
// we loop through the list of TaskViews, render each one and append the result to our DOM object.

    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Calls the task to render
      card.render();

      // Add that HTML to our task list
      // referencing jquery object above.
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  }
});






//Export makes something defined in this .js file available in another file. The 'default' keyword means that this is the "main" thing we're exporting from this file, and will make importing it easier.

// task_list_view.js
export default TaskListView;
