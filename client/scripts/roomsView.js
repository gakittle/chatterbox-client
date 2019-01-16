var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $all: $('#all'),

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.on('change', function() {
      RoomsView.renderRoom(event, $(this).val());
    });
    RoomsView.$all.on('click', function() {
      App.roomname = 'home';
      $('.chat').show();
    });
    var homeDiv = `<option value="home">home</option>`;
    RoomsView.$select.append(homeDiv);
  },

  renderRoom: function(event, currentRoom) {
    if (typeof(event) === 'string') {
      var $home = RoomsView.$select.children()[0];
      $home.remove();
      var roomDiv = `<option value="${event}">${event}</option>`;
      RoomsView.$select.append(roomDiv);
    }
    App.roomname = currentRoom;
    if (App.roomname === 'home') {
      MessagesView.renderMessage(null, Friends.reconnect);
    }

    var chats = Array.from(MessagesView.$chats.children());
    chats.forEach(function(chat) {
      if (!$(chat).hasClass(`${currentRoom}`)) {
        $(chat).hide();
      } else {
        $(chat).show();
      }
    });
  },
};
