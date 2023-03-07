const user = require('../services/users.service');
const userFactory = require('../services/factory/user.factory');
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

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
    userModelService = userFactory(req.body.name, req.body.username);
    res = await user.create(userModelService);
    response.status(getStatusCode(res)).send({error: res});
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

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
  get,
  create,
  update,
  remove
};