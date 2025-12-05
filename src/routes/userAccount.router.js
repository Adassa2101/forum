import {Router} from "express";
import userAccountController from "../controllers/userAccount.controller.js";

const router = Router();

router.post('/register', userAccountController.registerUser);
router.post('/login', userAccountController.loginUser);
router.delete('/user/:user', userAccountController.removeUser);
router.patch('/user/:user', userAccountController.updateUser);
router.patch('/user/:user/role/:role', userAccountController.addRole);
router.delete('/user/:user/role/:role', userAccountController.deleteRole);
router.patch('/password', userAccountController.changePassword);
router.get('/:user', userAccountController.getUser);

export default router;