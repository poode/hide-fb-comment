const router = require('express-promise-router')();

const loginRouter = require('./login')
const facebookActionRouter = require('./facebookAction')

router.use(loginRouter)
router.use(facebookActionRouter)

module.exports = router;