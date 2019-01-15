var Rooms = {
  roomList: ['HRSF111!!!'],

  add: function() {
    var newRoom = prompt('Be our guest!');
    var roomObj = {'roomName' : newRoom};
    Rooms.roomList.push(newRoom);
    RoomsView.render(roomObj);
  }
};