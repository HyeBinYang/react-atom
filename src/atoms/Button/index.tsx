import React from "react";
import styled from "styled-components";

type ButtonColor = "primary" | "secondary" | "gray";
type ButtonSize = "Large" | "Medium" | "Small";

interface StyledButton {
  color?: ButtonColor;
  size?: ButtonSize;
}

const ButtonWrapper = styled.button<StyledButton>`
  padding: 4px 8px;
  color: #fff;
  background-color: ${({ color }) => (color === "primary" ? "#32c1ff" : "#f1f2f3")};
  border: none;
  border-radius: 8px;
`;

export interface ButtonProps {
  children?: string | JSX.Element;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = ({ children, color, size, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper color={color} size={size} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
