import { FETCH_SUCCESS, FETCH_FAILURE, ADD_FAVORITE, REMOVE_FAVORITE } from 'actions';

const initialState = {
  wallpapers: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS: {
      return { ...state, wallpapers: payload.data };
    }
    case FETCH_FAILURE: {
      return state;
    }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload.newFavorite],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
