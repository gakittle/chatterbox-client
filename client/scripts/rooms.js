var Rooms = {
  roomList: [],

  add: function() {
    var newRoom = prompt('Create a new room');
    Rooms.roomList.push(newRoom);
  }
};