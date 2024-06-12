import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 2rem 0 2rem 0;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ImagePlaceholder = styled.div`
  position: relative;
  background: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 18px;
  border-radius: 10px;
  overflow: hidden;
`;
export const AddToFav = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
export const Image = styled.img`
  align-self: start;
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 10px;
`;
export const Mock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  width: 100%;
  min-height: 600px;
  border-radius: 10px;
  background: #e0e0e033;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const Author = styled.p`
  padding-top: 20px;
  font-size: 18px;
  color: #f39c12;
  margin: 5px 0;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin: 5px 0;
`;
export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 20px 0 10px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const InfoItem = styled.li`
  margin-bottom: 5px;
  strong {
    color: #f39c12;
  }
`;
