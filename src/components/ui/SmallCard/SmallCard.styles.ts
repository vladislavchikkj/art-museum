import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.imagePlaceholder};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small};
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const ImagePlaceholder = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.imagePlaceholder};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const Author = styled.p`
  width: 80%;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.cardAuthor};
  margin: 0;
`;

export const Status = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.cardStatus};
  margin: 0;
  padding-top: ${({ theme }) => theme.spacing.small};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
