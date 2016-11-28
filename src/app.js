//app.js
//so add the following line to the top of app.js:
import $ from 'jquery';

import Backbone from 'backbone';

import _ from 'underscore';

// added this after.
import TaskListView from 'app/views/task_list_view';
// Underscore is a JavaScript utility library which (like jQuery) makes its functions available through a global _ object. One of these functions is a templating library, which works a lot like ERB did with Rails


var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon'
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];


// we initialize a TaskListView and call its render()
$(document).ready(function() {
  var application = new TaskListView({
    // When our view changes this.$el, the changes will immediately be reflected in the DOM
    el: $('#application'),
    taskData: taskData
  });
  application.render();
});






// reference it in here.
// $(document).ready(function() {
//   var taskTemplate = _.template($('#task-template').html());
//   // so anything that we want our template to use we have to pass in manually:
//   // var generatedHtml = taskTemplate({task: taskData[0]}); dont need this.
//   var taskListElement = $('.task-list');
//   var cardList = [];
//   taskData.forEach(function(task) {
//     var card = new TaskView({
//       task: task,
//       template: taskTemplate
//     });
//     cardList.push(card);
//     taskListElement.append(card.render().$el);
//   });
//
// });



// $(document).ready(function() {
//   var taskListElement = $('.task-list');
//   var cardList = [];
//   taskData.forEach(function(task) {
//       var card = new TaskView({task: task});
// ** template is set above.
// template could be set// see above!


//       cardList.push(card);
//       taskListElement.append(card.render().$el);
//   });
// });



// $(document).ready(function() {
//   $('#test-area').append($('<p>Hello World!</p>'));
// });
