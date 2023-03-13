const userService = require('../services/users.service');
const userFactory = require('../services/factory/user.factory');
const httpStatusCode = require('http-status-codes');
const { response } = require('express');
const tokenMiddleware = require('../lib/token.middleware');
const jwt = require('jsonwebtoken');

// async function get(req, res, next) {
//   try {
//       res.json(await user.getMultiple(req.query.page));
//   } catch (err) {
//       console.error(`Error while getting programming languages`, err.message);
//       next(err);
//   }
// }

async function create(req, res, next) {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
    }
    userModelService = userFactory(req.body.name, req.body.username);
    creationStatus = userService.create(userModelService);
    res.status(res.status(httpStatusCode[creationStatus.value]).json({ message: creationStatus.message }));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function login(req, res, next) {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: 'Error. Please enter the correct username and password' })
    }
    userModelService = userFactory(req.body.name, req.body.username);
    authentificationStatus = userService.login(userModelService);
    res.status(res.status(httpStatusCode[authentificationStatus.value]).json({ message: authentificationStatus.message }));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}


async function profil(req, res, next) {
  try {
    const token = req.headers.authorization && tokenMiddleware.extractBearerToken(req.headers.authorization)
    // Décodage du token
    const decoded = jwt.decode(token, { complete: false })
    return res.json({ content: decoded })
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
}
//TODO AJOUT DU PROFIL POUR GÉRER L'AUTHORISATION



// async function update(req, res, next) {
//   try {
//     res.json(await user.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await user.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

module.exports = {

  create,
  login,
  profil

};