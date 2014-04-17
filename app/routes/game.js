export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://bgg-api.herokuapp.com/api/v1/thing?id='+params.boardgameId+'&info=1');
  }
});
