import React from 'react';
import { storiesOf } from '@storybook/react';
import NavButton from 'components/atoms/NavButton/NavButton';
import { ImageAlt } from '@styled-icons/boxicons-regular/ImageAlt';
import { Search } from '@styled-icons/evaicons-solid/Search';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';

storiesOf('NavButton', module)
  .add('With image icon - default', () => <NavButton text="IMAGES" icon={ImageAlt} />)
  .add('With image icon - selected', () => <NavButton text="IMAGES" icon={ImageAlt} isSelected />)
  .add('With search icon - default', () => <NavButton text="SEARCH" icon={Search} />)
  .add('With search icon - selected', () => <NavButton text="SEARCH" icon={Search} isSelected />)
  .add('With heart icon - default', () => <NavButton text="FAVORITES" icon={FavoriteBorder} />)
  .add('With heart icon - selected', () => (
    <NavButton text="FAVORITES" icon={FavoriteBorder} isSelected />
  ));
