const router = require('express').Router();
const WXMsgCrypto = require('./utils/wxcrypto');

const wxMsgCrypto = new WXMsgCrypto(
  process.env.TOKEN,
  process.env.ENCODINGAESKEY
);

// URL验证
router.get('/', (req, res) => {
  try {
    const { msg_signature: signature, timestamp, nonce, echostr } = req.query;
    console.log('req.query', req.query);
    if (checkSignature(signature, timestamp, nonce)) res.send(echostr);
    else res.send('signature invalid');
  } catch (error) {
    console.log(error);
    res.send();
  }
});

router.get('/health', (req, res) => {
  res.send('success');
});
