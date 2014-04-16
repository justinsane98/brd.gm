# BRD.GM

BoaRD.GaMe aims to be a slimmer read-only counterpart to boardgamegeek.com

## Getting Started
* Download and install [node.js](http://nodejs.org/)
* Download and install [Ember Appkit](https://github.com/stefanpenner/ember-app-kit)
* run `npm install` from your project root.
* run `grunt server` from your project root.
* view `http://localhost:8000`

## Features
- search and view user collections
- search and view boardgames

## Todo
- toggle text and thumbnail views in results pages
- boardgame page (game route example /g/arkham-horror)
  - large background image in header
  - smaller thumbnail of cover
  - rating
  - min age
  - # players
  - description
  - maybe more images
- integrate search into fixed header
- account for no results being returned from API
- refactor /game to /games

## Special Thanks
- [Board Game Geek](http://boardgamegeek.com)
- [@strathmeyer's node-bgg-api](https://github.com/strathmeyer/node-bgg-api)
