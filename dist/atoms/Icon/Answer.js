"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Answer = ({ size, color = "#000000" }) => {
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.00001 12C4.00001 7.58172 7.58173 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.8947 20 9.84416 19.7764 8.88921 19.3729L8.6405 19.2679L4.23568 19.8332L4.98005 15.8548L4.83105 15.555C4.29942 14.4852 4.00001 13.279 4.00001 12ZM12 2C6.47716 2 2.00001 6.47715 2.00001 12C2.00001 13.4731 2.31916 14.8741 2.89281 16.1356L2.01707 20.8161C1.95825 21.1305 2.05335 21.454 2.27293 21.6866C2.49252 21.9191 2.81008 22.0326 3.12732 21.9919L8.36711 21.3194C9.49438 21.7591 10.7202 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2ZM10.3173 14.3683H13.6572L14.1926 15.949H16.5L13.262 7H10.738L7.5 15.949H9.78187L10.3173 14.3683ZM11.9873 9.40935L13.0963 12.6856H10.8909L11.9873 9.40935Z", fill: color })));
};
exports.default = Answer;
