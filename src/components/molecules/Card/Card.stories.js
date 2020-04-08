import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Basic card', () => (
  <>
    <Card
      autor="John Smith"
      imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    />
    <Card
      autor="Andrzej Nowak"
      imageUrl="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
    />
    <Card
      autor="Cool Guy"
      imageUrl="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    />
  </>
));
