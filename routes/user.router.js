//**require packages */
const router = require('express').Router();

//**inport controllers */
const {userController,
    createUserController,
    updateUserController,
    deleteUserController
 } = require('../controllers/user.controller');



//**user route define  */
router.route('/')
        .get(userController)
        .post(createUserController)
        .put(updateUserController)
        .delete(deleteUserController);



//****Exports router */
module.exports = router;

