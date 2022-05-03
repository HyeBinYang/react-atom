/// <reference types="react" />
export interface ButtonProps {
    children?: string | JSX.Element;
    color?: "primary" | "secondary";
    size?: "Large" | "Medium" | "Small";
    onClick?: () => void;
}
declare const Button: ({ children, color, size, onClick }: ButtonProps) => JSX.Element;
export default Button;
