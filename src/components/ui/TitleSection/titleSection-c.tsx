import { TitleSectionProps } from '@type/types';
import React from 'react';
import { Header, Subtitle, Title } from './titleSection-c.styles';

const TitleSection: React.FC<TitleSectionProps> = ({ subtitle, title }) => {
  return (
    <Header>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Header>
  );
};

export default TitleSection;
