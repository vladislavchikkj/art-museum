import React from 'react';
import { SpinnerWrapper, StyledSpinner } from './spinner-c.styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper data-testid="spinner-wrapper">
      <StyledSpinner data-testid="spinner" />
    </SpinnerWrapper>
  );
};

export default Spinner;
