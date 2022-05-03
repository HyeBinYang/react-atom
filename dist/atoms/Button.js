"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonWrapper = styled_components_1.default.button `
  color: #fff;
  background-color: ${({ color }) => (color === "primary" ? "green" : "blue")};
`;
const Button = ({ children, color, size, onClick }) => {
    return (react_1.default.createElement(ButtonWrapper, { color: color, size: size, onClick: onClick }, children));
};
exports.default = Button;
