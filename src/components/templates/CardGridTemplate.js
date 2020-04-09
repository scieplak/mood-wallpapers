import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';

const Wrapper = styled.section`
  max-width: 1400px;
  margin: auto;
  display: grid;
  justify-items: center;
  padding: 30px 20px;
  grid-gap: 20px 30px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardGridTemplate = ({ cards }) => (
  <Wrapper>
    {cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </Wrapper>
);

CardGridTemplate.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      fullsizeUrl: PropTypes.string,
      autor: PropTypes.string,
      tags: PropTypes.array,
    }),
  ),
};

CardGridTemplate.defaultProps = {
  cards: [],
};
export default CardGridTemplate;
