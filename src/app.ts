import linksRouter from './routes/links';

var express = require('express')
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(linksRouter);

export default app;