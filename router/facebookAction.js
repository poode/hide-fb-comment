const graph = require('fbgraph');
const router = require('express-promise-router')();

const config = require('../config');

const User = require('../database/model/User');

router.get('/facebook/user/profile', async (req, res ,next) => {
  const accessToken = req.get('Authorization');
  const user = await User.findOne({ accessToken });
  graph.setAccessToken(accessToken);
  graph.setVersion('9.0');

  
  
  graph.get('100000760955854', function(err, res) {
        // returns the post id
        console.log(res); // { id: xxxxx}
    });
  res.json('done');
});


router.get('/facebook/webhook', (req, res, next) => {
  if(req.query['hub.mode'] && req.query['hub.verify_token'] === config.FACEBOOK_VERIFY_TOKEN) {
    console.log(req.query['hub.challenge'])
    res.status(200).send(req.query['hub.challenge']);
  }
  res.status(403).json();
})

router.post('/facebook/webhook', (req, res, next) => {
  console.log(JSON.stringify(req.body));

  res.status(200).send();
})
module.exports = router;