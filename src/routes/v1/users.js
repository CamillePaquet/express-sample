const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');

/* GET programming languages. */
// router.get('/', userController.get);
  
/* POST programming language */
router.post('/users', userController.create);

router.post('/login', userController.login);
router.get('/profil', userController.profil);

/* PUT programming language */
// router.put('/:id', userController.update);

/* DELETE programming language */
// router.delete('/:id', userController.remove);

module.exports = router;
