var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Welcome To asdfReact');
});


router.get('/heroes', function(req, res, next) {
  const heroes = [{
      id: 0,
      name:'batman',
      saying:'im batman'
    },
    {
      id: 1,
      name: 'joker',
      saying: 'boo'
    }
  ];
  res.json(heroes);
});


module.exports = router;
