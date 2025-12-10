import {Router} from "express";
import userAccountController from "../controllers/userAccount.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register',validate('registerUser'), userAccountController.registerUser);
router.post('/login', userAccountController.loginUser);
router.delete('/user/:user', userAccountController.removeUser);
router.patch('/user/:user',validate('updateUser'), userAccountController.updateUser);
router.patch('/user/:user/role/:role',validate('changeRoles','params'), userAccountController.addRole);
router.delete('/user/:user/role/:role', validate('changeRoles', 'params'), userAccountController.deleteRole);
router.patch('/password',validate('changePassword'), userAccountController.changePassword);
router.get('/:user', userAccountController.getUser);

export default router;