import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  min-height: 514px;
`;

export const Card = styled(Link)`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 514px;
`;

export const ImagePlaceholder = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardContent = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  position: absolute;
  padding: 15px;
  width: 80%;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: #333;
`;

export const CardAuthor = styled.div`
  color: #ff7a00;
  margin-bottom: 20px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardStatus = styled.div`
  color: #666;
`;
