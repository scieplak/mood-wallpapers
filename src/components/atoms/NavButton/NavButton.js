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
  height: 80px;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.mainPurple};
  }

  svg {
    width: 60px;
  }
`;

const StyledText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NavButton = ({ icon: Icon, text, ...props }) => (
  <Button {...props}>
    <Icon />
    <StyledText>{text}</StyledText>
  </Button>
);

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node, PropTypes.object])
    .isRequired,
};

export default NavButton;
