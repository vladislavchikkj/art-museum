// styles.ts
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  min-height: 514px;
`;

export const Card = styled(Link)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 514px;
`;

export const ImagePlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.imagePlaceholder};
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.imagePlaceholderText};
  font-size: 18px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

export const CardContent = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.cardBackground};
  position: absolute;
  padding: ${({ theme }) => theme.spacing.small};
  width: 80%;
  bottom: 0;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardAuthor = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardStatus = styled.div`
  color: ${({ theme }) => theme.colors.cardStatus};
`;
