import React from "react";
import styled from "styled-components";
import { TitleSectionProps } from "../../types";

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Subtitle = styled.div`
  color: #e0a449;
  font-size: 1rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin: 0;
  padding-bottom: 10px;
`;

const TitleSection: React.FC<TitleSectionProps> = ({ subtitle, title }) => {
  return (
    <Header>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Header>
  );
};

export default TitleSection;
