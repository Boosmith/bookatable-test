const router = require('express').Router();
const controller = require('./userController');

router.param('id', controller.params);

router
  .route('/')

  .get(controller.get)
  .post(controller.post);

router
  .route('/:id')
  .delete(controller.delete)
  .get(controller.getOne)
  .put(controller.put);

module.exports = router;
