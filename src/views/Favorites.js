import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardGridTemplate from 'components/templates/CardGridTemplate';

const Favorites = ({ favorites }) => <CardGridTemplate cards={favorites} />;

const mapStateToProps = ({ favorites }) => {
  return { favorites };
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      fullsizeUrl: PropTypes.string,
      autor: PropTypes.string,
      tags: PropTypes.array,
    }),
  ),
};

Favorites.defaultProps = {
  favorites: [],
};
export default connect(mapStateToProps)(Favorites);
