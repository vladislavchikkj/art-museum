import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  display: flex;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const ImagePlaceholder = styled.div`
  width: 70px;
  height: 70px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
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
  color: #f39c12;
  margin: 0;
`;

export const Status = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
  padding-top: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
