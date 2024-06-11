import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner: React.FC = () => {
  return (
    <SpinerWrapper>
      <StyledSpinner />;
    </SpinerWrapper>
  );
};

export default Spinner;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const StyledSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;
