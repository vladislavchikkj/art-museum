import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0 100px 0;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
`;
