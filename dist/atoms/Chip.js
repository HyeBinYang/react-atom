"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@ionic/react");
const react_2 = __importDefault(require("react"));
const Chip = () => {
    return (react_2.default.createElement(react_1.IonChip, { color: "danger" },
        react_2.default.createElement(react_1.IonLabel, { color: "secondary" }, "Secondary")));
};
exports.default = Chip;