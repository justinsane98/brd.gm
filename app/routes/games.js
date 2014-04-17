export default Ember.Route.extend({
  model: function(params) {
    // set placeholder results
    var ids = '';
    return Ember.RSVP.hash({
      // search bgg for games by name
      init: Ember.$.getJSON('http://bgg-api.herokuapp.com/api/v1/search?query='+params.boardgameName),
    }).then(function(results){
      // iterate over intial results to grab ids
      $.each(results.init.items.item, function(i,item){
        if(i > 0){
          ids += ',' + item.$.id;
        } else {
          ids += item.$.id;
        }
      });
      // return full game listings that match
      return Ember.$.getJSON('http://bgg-api.herokuapp.com/api/v1/thing?id='+ids);
    });
  }
});
