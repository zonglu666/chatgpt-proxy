require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const router = require('./router');

const app = express();
app.use(express.urlencoded({ limit: '100mb', extended: false }));
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.xml()); // 解析XML格式为JSON
app.use(cors());
app.use(router);

const port = process.env.PORT || 12930;
app.listen(port, () =>
  console.log(
    `🚀 ChatGPT Proxy start success, listening on port ${port} ${
      process.env.NODE_ENV || 'debug'
    }!`
  )
);
