//task_view.js

// import $ from 'jquery';
//
// import Backbone from 'backbone';
//
// import _ from 'underscore';

var TaskView = Backbone.View.extend({
  initialize: function(options) {
    this.task = options.task;
    this.template = options.template;
  },
  render: function() {
    var html = this.template({task: this.task});
    this.$el.html(html);
    // now accomplished with the above.

    // render: function() {
    //   var html = '<li class="task">';
    //   html += '<h2>' + this.task.title + '</h2>';
    //   html += '<p>' + this.task.description + '</p>';
    //   html += '</li>';
    //   this.$el.html($(html));

    // Enable chained calls
    return this;
  }
});

















//Export makes something defined in this .js file available in another file. The 'default' keyword means that this is the "main" thing we're exporting from this file, and will make importing it easier.

// task_view.js
export default TaskView;
