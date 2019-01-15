var Friends = {

  initialize: function() {
    $('#chats').on('click', '.username', function(event) {
      var frand = $(this).text().trim();
      Friends.toggleStatus(frand);
    });
  },

  list: {},

  toggleStatus: function(frand) {
    if (Friends.list[frand]) {
      delete Friends.list[frand];
      $(`.${frand}`).css({'color': ''});
    } else {
      Friends.list[frand] = true;
      $(`.${frand}`).css({'color': 'red'});
    }
  }

};