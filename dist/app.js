"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = __importDefault(require("./routes/links"));
var express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(links_1.default);
exports.default = app;
