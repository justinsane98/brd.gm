export default Ember.Controller.extend({
  username: null,
  boardgameName: null,
  boardgameId: null,
  actions: {
    searchByUser: function() {
      this.transitionTo('collection',this.username);
    },
    searchByGame: function() {
      var boardgameName = this.boardgameName.replace(/\s+/g,'-');
      this.transitionTo('games',boardgameName);
    },
    searchById: function(){
      this.transitionTo('game',this.boardgameId);
    }
  }
});
