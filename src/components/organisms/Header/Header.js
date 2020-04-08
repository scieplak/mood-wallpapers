import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/atoms/NavButton/NavButton';
import { ImageAlt } from '@styled-icons/boxicons-regular/ImageAlt';
import { Search } from '@styled-icons/evaicons-solid/Search';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';

const StyledHeader = styled.header`
  height: 200px;
  margin: 0;
  padding: 0;
  box-shadow: 0px 6px 25px 0px #000000;
`;

const TopBar = styled.div`
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.heading};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainPurple};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = () => (
  <StyledHeader>
    <TopBar>Mood Wallpapers</TopBar>
    <StyledNav>
      <NavButton text="IMAGES" isSelected icon={ImageAlt} />
      <NavButton text="SEARCH" icon={Search} />
      <NavButton text="FAVORITES" icon={FavoriteBorder} />
    </StyledNav>
  </StyledHeader>
);

export default Header;
