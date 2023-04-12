'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization.split(' ')[1];
  let arr = [];
  arr = base64.decode(basic).split(':');
  try {
    console.log(req.user);
    req.user = await users.authenticateBasic(`${arr[0]}`, `${arr[1]}`);

    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

}

