import React from 'react';
import { storiesOf } from '@storybook/react';
import IcoButton from 'components/atoms/IcoButton/IcoButton';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

storiesOf('IcoButton', module).add('With heart icon', () => <IcoButton icon={Heart} />);
