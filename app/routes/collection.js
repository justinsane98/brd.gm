export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://bgg-api.herokuapp.com/api/v1/collection?username='+params.username);
  }
});
