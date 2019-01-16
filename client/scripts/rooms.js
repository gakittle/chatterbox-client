var Rooms = {
  roomList: ['home'],

  add: function() {
    var newRoom = prompt('Be our guest!');
    Rooms.roomList.push(newRoom);
    var roomDiv = `<option value="${newRoom}">${newRoom}</option>`;
    RoomsView.$select.append(roomDiv);
  }
};