import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import IcoButton from 'components/atoms/IcoButton/IcoButton';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { Heart as FilledHeart } from '@styled-icons/boxicons-solid/Heart';
import { Fullscreen } from '@styled-icons/boxicons-regular/Fullscreen';
import { connect } from 'react-redux';
import { addFavorite as addToFavorites, removeFavorite as removeFromFavorites } from 'actions';

const Wrapper = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-image: ${({ imageUrl }) => imageUrl && css`url('${imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  justify-content: space-around;
  right: 10px;
  top: 10px;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px;
`;

const Tags = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 5px 10px;
`;

const Card = ({ card, favorites, addFavorite, removeFavorite }) => {
  const { id, imageUrl, autor, tags, fullsizeUrl } = card;
  const location = useLocation();
  const isFavorite = favorites.some((item) => item.id === id);

  return (
    <Wrapper imageUrl={imageUrl}>
      {/* eslint-disable-next-line react/prop-types */}
      {location.pathname === '/favorites' && <Tags>{tags.join(', ')}</Tags>}
      <ButtonWrapper>
        <IcoButton icon={Fullscreen} onClick={() => window.open(fullsizeUrl, '_blank')} />
        <IcoButton
          icon={isFavorite ? FilledHeart : Heart}
          onClick={() => {
            if (isFavorite) {
              // eslint-disable-next-line no-alert
              if (window.confirm('Are you sure?')) removeFavorite(id);
            } else addFavorite(card);
          }}
        />
      </ButtonWrapper>
      <BottomBar>{autor}</BottomBar>
    </Wrapper>
  );
};

Card.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      fullsizeUrl: PropTypes.string,
      autor: PropTypes.string,
      tags: PropTypes.array,
    }),
  ).isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      fullsizeUrl: PropTypes.string,
      autor: PropTypes.string,
      tags: PropTypes.array,
    }),
  ),
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

Card.defaultProps = {
  favorites: [],
};

const mapStateToProps = ({ favorites }) => ({ favorites });
const mapDispatchToProps = (dispatch) => ({
  addFavorite: (newFavorite) => dispatch(addToFavorites(newFavorite)),
  removeFavorite: (imageUrl) => dispatch(removeFromFavorites(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
