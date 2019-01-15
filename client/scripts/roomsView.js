var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  //TODO
  //set up event listener on $button
  //populate $select with rooms that were added

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.on('change', function() {
      RoomsView.renderRoom(event, $(this).val());
    });
    // var roomObj = {'roomName' : Rooms.roomList[0]};
    // RoomsView.renderRoom(Rooms.roomList[0]);
  },

  renderRoom: function(event, currentRoom) {
    if (typeof(event) === 'string') {
      var roomDiv = `<option value="${event}">${event}</option>`;
      RoomsView.$select.append(roomDiv);
    }
    App.roomname = currentRoom;
    // event.preventDefault();
    // debugger;
    var chats = Array.from(MessagesView.$chats.children());
    chats.forEach(function(chat) {
      if (!$(chat).hasClass(`${currentRoom}`)) {
        $(chat).hide();
      } else {
        $(chat).show();
      }
    });
  },

  // template: _.template(`
  //     <option value="<%- roomName %>"> 
  //     <%- roomName %>
  //     </option>
  //   `)
};
