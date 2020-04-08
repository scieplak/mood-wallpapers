import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import IcoButton from 'components/atoms/IcoButton/IcoButton';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { Heart as FilledHeart } from '@styled-icons/boxicons-solid/Heart';

const Wrapper = styled.section`
  position: relative;
  background-color: red;
  margin: 10px;
  height: 280px;
  max-width: 460px;
  border-radius: 10px;
  overflow: hidden;
  background-image: ${({ imageUrl }) => imageUrl && css`url('${imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
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

const Card = ({ autor, isFavorite, imageUrl }) => (
  <Wrapper imageUrl={imageUrl}>
    <ButtonWrapper>
      <IcoButton icon={isFavorite ? FilledHeart : Heart} />
    </ButtonWrapper>
    <BottomBar>{autor}</BottomBar>
  </Wrapper>
);

Card.propTypes = {
  autor: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
};

Card.defaultProps = {
  isFavorite: false,
};

export default Card;
