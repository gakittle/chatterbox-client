var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  //TODO
  //set up event listener on $button
  //populate $select with rooms that were added

  initialize: function() {
    RoomsView.$button.on('click', Rooms.add);
    var roomObj = {'roomName' : Rooms.roomList[0]};
    RoomsView.render(roomObj);
  },

  render: function(newRoom) {
    var roomDiv = RoomsView.template(newRoom);
    RoomsView.$select.append(roomDiv);
  },

  template: _.template(`
      <option value="<%- roomName %>"> 
      <%- roomName %>
      </option>
    `)
};
