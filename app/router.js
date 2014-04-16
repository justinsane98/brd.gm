var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('collection', { path: '/collection/:username'});
  this.resource('game', { path: '/game/:boardgame'});
  this.route('search');
});

export default Router;
