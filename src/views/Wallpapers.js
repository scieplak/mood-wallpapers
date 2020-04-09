import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import CardGridTemplate from 'components/templates/CardGridTemplate';
import { getDayPart, getSeason } from 'utils/helpers';

const Keywords = styled.h1`
  max-width: 1400px;
  margin: 30px auto 0;
  padding: 0 15px;
`;

const Wallpapers = ({ wallpapers, fetchWallpapers }) => {
  const currentDate = new Date();
  const keywords = [getDayPart(currentDate), getSeason(currentDate), 'nature'];

  useEffect(() => {
    fetchWallpapers(keywords);
  }, []);

  return (
    <>
      <Keywords>Current keywords: {keywords.join(', ')}</Keywords>
      <CardGridTemplate cards={wallpapers}>hejo</CardGridTemplate>
    </>
  );
};

Wallpapers.propTypes = {
  wallpapers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      fullsizeUrl: PropTypes.string,
      autor: PropTypes.string,
      tags: PropTypes.array,
    }),
  ),
  fetchWallpapers: PropTypes.func.isRequired,
};

Wallpapers.defaultProps = {
  wallpapers: [],
};

const mapStateToProps = ({ wallpapers }) => ({ wallpapers });

const mapDispatchToProps = (dispatch) => ({
  fetchWallpapers: (keywords) => dispatch(fetchItems(keywords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallpapers);
