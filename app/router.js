var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('collection', { path: '/collection/:username'});
  this.resource('games', { path: '/games/:boardgameName'});
  this.resource('game', { path: '/game/:boardgameId'});
  this.route('search');
});

export default Router;
