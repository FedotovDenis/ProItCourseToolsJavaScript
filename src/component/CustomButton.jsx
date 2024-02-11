import React from 'react';
import styled from 'styled-components';

const StyledClickMeButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

const CustomButton = ({ onClick }) => {
  return (
    <StyledClickMeButton onClick={onClick}>Натисніть мене</StyledClickMeButton>
  );
};

export default CustomButton;
