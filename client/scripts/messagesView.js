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
      var postDiv = MessageView.render(post);
      MessagesView.$chats.append(postDiv);
    });
  },

  render: function() {
  }

};