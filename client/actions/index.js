import * as types from '../constants/ActionTypes.js';

module.exports = {

  updatePlaces: function(places) {
    return { type: types.UPDATE_PLACES, places };
  },

  savePlace: function(place) {
    return { type: types.SAVE_PLACE, place };
  },

  deletePlace: function(placeId) {
    return { type: types.DELETE_PLACE, placeId };
  },

  saveCoordinate: function(coord) {
    return { type: types.SAVE_COORDINATE, coord};
  },

  fetchCoordinate: function() {
    return { type: types.FETCH_COORDINATE };
  }

};
