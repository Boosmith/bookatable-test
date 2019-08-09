const router = require("express").Router();
const controller = require("./userController");

router.param("id", controller.params);

router
  .route("/")
  /**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Users

 */
  .get(controller.get)
  .post(controller.post);

router
  .route("/:id")
  .delete(controller.delete)
  .get(controller.getOne)
  .put(controller.put);

module.exports = router;
