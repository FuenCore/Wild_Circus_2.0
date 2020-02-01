const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const app = express();
const connection = require('../../config');
const bcrypt = require('bcrypt');

// Route to protect
router.post('/main', verifyToken, (req, res) => {
  // when you want to access send header value for
  // Autorization Bearer {token}
  jwt.verify(req.token, 'pass', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created....',
        authData
      });
    }
  });
});

// SIGN UP

router.post('/signup', (req, res) => {
  const {
    // birthday,
    // phone_nbr,
    // email,
    // has_twinlicence,
    // position_id,
    // club_id,
    // licence_nbr,
    // team_id,
    // position2_id,
    // is_registered
        username,
        pseudo,
        firstname,
        lastname,
  } = req.body;
  let hash = bcrypt.hashSync(req.body.pass, 10);

  connection.query(
    // 'INSERT INTO user SET birthday=? ,phone_nbr=? ,email =? ,password =?, is_registered=? WHERE licence_nbr =? AND team_id =? AND has_twinlicence =? AND position_id =? AND position2_id=? AND club_id =? ',
    'INSERT INTO user SET username=?, pseudo=?, firstname=?, lastname=?, pass=?',
    [
    //   birthday,
    //   phone_nbr,
    //   email,
    //   hash,
    //   is_registered,
    //   licence_nbr,
    //   team_id,
    //   has_twinlicence,
    //   position_id,
    //   position2_id,
    //   club_id
    username,
    pseudo,
    firstname,
    lastname,
    hash
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

// LOGIN
router.post('/login', (req, res) => {
  const formUser = req.body.username;
  const formPass = req.body.pass;
  connection.query(
    `SELECT * FROM user WHERE username = ?`,
    [formUser, formPass],
    (err, user) => {
      if (err) {
        res.status(500);
      } else {
        if (user) {
          console.log(user)
          bcrypt.compare(formPass, user[0].pass, function(err, results) {
            if (results) {
              console.log('yes');
              jwt.sign({ user }, 'pass', { expiresIn: '666666s' }, (err, token) => {
                // save the token in localstorage
                res.json({ token, user });
              });
              // Passwords match
            }
          });
        }
      }
    }
  );
});

router.get('/info', (req, res) => {
    const formUser = req.body.username
    connection.query('SELECT * FROM user WHERE username = ?', [ formUser ], (err, results) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.json(results)
        }
    })
})

// Fomat token
// Authorization: Bearer <access_token>
// Verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];

  //Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // split
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
