import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.white};
  width: 41px;
  height: 41px;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const IcoButton = ({ icon: Icon }) => (
  <Button>
    <Icon />
  </Button>
);

IcoButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IcoButton;
