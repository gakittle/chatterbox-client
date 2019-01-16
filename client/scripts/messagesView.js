var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Messages.results.forEach(function(post) {
      if (!post.username) {
        post.username = 'fredBot';
      }
      if (!post.text) {
        post.text = 'boo';
      }
      if (!post.roomname) {
        post.roomname = 'HRSF111!!!';
      }
      var postDiv = MessageView.render(post);
      MessagesView.$chats.append(postDiv);
    });
  },

  renderMessage: function(post) {
    if (post.username) {
      var testPost = MessageView.render(post);
      MessagesView.$chats.prepend(testPost);
    } else {
      Parse.readAll((data) => {
        Messages = data;
        MessagesView.$chats.html('');
        MessagesView.initialize();
        RoomsView.renderRoom(null, App.roomname);
      });
    }
  }

};