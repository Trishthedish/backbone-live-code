// task_list_views.js
//  we need to import our new files where they're need

// TaskListView will be responsible for handling these events. In fact, TaskListView is the only thing we'll need to modify for this entire lecture!

import $ from 'jquery';

import Backbone from 'backbone';

import _ from 'underscore';

import Task from 'app/models/task'; // Since the Task model is defined in a separate file
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
    this.modelList = [];
    this.cardList = [];

    this.taskData.forEach(function(task) {
      var card = new TaskView({
        task: task,
        template: this.taskTemplate
      });
      this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach

    this.input = {
     title: this.$('.new-task input[name="title"]'),
     description: this.$('.new-task input[name="description"]')
    };
  }, // end of initialize function
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
  },

    // Now that our callback is being called, we need to handle the event. We know from our experience with jQuery that we need to do the following:
  events: {
    //has action of submitting
    'submit .new-task': 'createTask',
    // "event css-selector" setting it to clear input
    'click .clear-button': 'clearInput'
  },
    createTask: function(event) {
      // Normally a form submission will refresh the page.
  // Suppress that behavior.
      event.preventDefault();
      console.log('createTask called');
      // Get the input data from the form and turn it into a task
      var task = this.getInput();

      // Add the new task to our list of tasks
      this.taskData.push(task);
      // Create a card for the new task, and add it to our card list
    var card = new TaskView({
      task: task,
      template: this.taskTemplate
    });
    this.cardList.push(card);

    // Re-render the whole list, now including the new card
    this.render();

    // Clear the input form so the user can add another task
    this.clearInput();


  },
  // Build a task from the data entered in the .new-task form
    getInput: function() {
      var task = {
        title: this.input.title.val(),
        description: this.input.description.val()
      };
      return task;
    },

    clearInput: function(event) {
      console.log("clearInput called friend!");
      this.input.title.val('');
      this.input.description.val('');
  }
});






//Export makes something defined in this .js file available in another file. The 'default' keyword means that this is the "main" thing we're exporting from this file, and will make importing it easier.

// task_list_view.js
export default TaskListView;
