var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //session 取值，使用中间件验证session
  res.render('index', { 'ur_username':'非法登录用户' });
});

module.exports = router;
