import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from 'components/atoms/NavButton/NavButton';
import { ImageAlt } from '@styled-icons/boxicons-regular/ImageAlt';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';

const StyledHeader = styled.header`
  height: 130px;
  box-shadow: 0px 6px 25px 0px #000000;
`;

const TopBar = styled.div`
  height: 40px;
  line-height: 38px;
  padding: 2px;
  text-align: center;
  font-size: 28px;
  font-family: ${({ theme }) => theme.fontFamily.heading};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainPurple};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 280px;
  margin: 0 auto;
  padding: 5px 0;
`;

const Header = () => (
  <StyledHeader>
    <TopBar>Mood Wallpapers</TopBar>
    <StyledNav>
      <NavButton exact as={NavLink} to="/" text="IMAGES" activeClassName="active" icon={ImageAlt} />
      <NavButton
        as={NavLink}
        to="/favorites"
        text="FAVORITES"
        activeClassName="active"
        icon={FavoriteBorder}
      />
    </StyledNav>
  </StyledHeader>
);

export default Header;
