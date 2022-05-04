/// <reference types="react" />
declare type ButtonColor = "primary" | "secondary" | "gray";
declare type ButtonSize = "Large" | "Medium" | "Small";
export interface ButtonProps {
    children?: string | JSX.Element;
    color?: ButtonColor;
    size?: ButtonSize;
    onClick?: () => void;
}
declare const Button: ({ children, color, size, onClick }: ButtonProps) => JSX.Element;
export default Button;
