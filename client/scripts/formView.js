var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // create message obj, input to POST
    var message = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: App.roomname
    };
    // POST with Parse.create
    Parse.create(message, MessagesView.render);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};