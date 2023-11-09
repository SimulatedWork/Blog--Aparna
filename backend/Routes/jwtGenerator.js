const jwt = require("jsonwebtoken");
require("dotenv").config();

import { json } from 'express';
import React from 'react'

function jwtGenerator(user_id) {
    const payload = {
        user: {
            id :user_id
        }
    }
  return json.sign(payload, process.env.jwtSecret, {expiresIn: "1h"});
}

module.exports = jwtGenerator;