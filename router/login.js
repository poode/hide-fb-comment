const router = require('express-promise-router')();

const config = require('../config');
const User = require('../database/model/User');
const { facebook } = require('../passport/strategies');

router.get('/', (req, res) => {
  res.json({ message: 'server is up!' });
})

router.get('/auth/facebook', facebook({
  scope: ['email']
}));

router.get(config.FACEBOOK_CALLBACK_URL_ROUTE,
  facebook(),
  async function(req, res) {
    // Successful authentication, redirect home.
    const user = await User.findOne({ 'profile.id': req.user.profile.id });
    if(!user) await User.create(req.user);
    else await User.update({ 'profile.id': req.user.profile.id }, req.user);
    res.json(req.user);
  });

router.post('/delete/user', async (req, res, next) => {
  const accessToken = req.get('Authorization');
  const user = await User.findOne({ accessToken });
  await User.deleteOne({ accessToken });
  res.json(`User with Name ${user.profile.displayName} has been deleted`);
});

module.exports = router;