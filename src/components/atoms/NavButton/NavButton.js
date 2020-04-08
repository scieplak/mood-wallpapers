import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.textGrey};
  width: 120px;
  height: 140px;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.mainPurple};
  }
`;

const StyledText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavButton = ({ icon: Icon, text, isSelected, ...props }) => (
  <Button isSelected={isSelected} {...props}>
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
