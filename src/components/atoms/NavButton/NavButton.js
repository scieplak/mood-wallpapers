import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.mainPurple : theme.colors.textGrey};
  width: 120px;
  height: 140px;
  cursor: pointer;
`;

const StyledText = styled.span`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.mainPurple : theme.colors.textGrey};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavButton = ({ icon: Icon, text, isSelected }) => (
  <Button isSelected={isSelected}>
    <Icon />
    <StyledText isSelected={isSelected}>{text}</StyledText>
  </Button>
);

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

NavButton.defaultProps = {
  isSelected: false,
};

export default NavButton;
