import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CardGridTemplate from 'components/templates/CardGridTemplate';

const Keywords = styled.h1`
  max-width: 1400px;
  margin: 30px auto 0;
  padding: 0 15px;
`;

const Wallpapers = ({ wallpapers }) => {
  return (
    <>
      <Keywords>
        {wallpapers.currentKeywords && `Current keywords: ${wallpapers.currentKeywords}`}
      </Keywords>
      <CardGridTemplate cards={wallpapers} />
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
};

Wallpapers.defaultProps = {
  wallpapers: [],
};

const mapStateToProps = ({ wallpapers }) => ({ wallpapers });

export default connect(mapStateToProps)(Wallpapers);
