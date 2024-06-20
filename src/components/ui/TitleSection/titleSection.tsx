import { TitleSectionProps } from '@utils/types/types';
import React from 'react';
import { Header, Subtitle, Title } from './titleSection.styles';

const TitleSection: React.FC<TitleSectionProps> = ({ subtitle, title }) => {
  return (
    <Header>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Header>
  );
};

export default TitleSection;
