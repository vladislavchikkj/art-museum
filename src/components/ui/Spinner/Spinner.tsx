import React from "react";
import { SpinerWrapper, StyledSpinner } from "./spinner.styles";

const Spinner: React.FC = () => {
  return (
    <SpinerWrapper data-testid="spinner-wrapper">
      <StyledSpinner data-testid="spinner" />
    </SpinerWrapper>
  );
};

export default Spinner;
