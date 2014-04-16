export default Ember.Controller.extend({
  username: null,
  boardgame: null,
  actions: {
    searchByUser: function() {
      this.transitionTo('collection',this.username);
    },
    searchByGame: function() {
      var boardgame = this.boardgame.replace(/\s+/g,'+');
      this.transitionTo('game',boardgame);
    }
  }
});
