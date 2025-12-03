import {Router} from "express";
import userAccountController from "../controllers/userAccount.controller.js";

const router = Router();

router.post('/register', userAccountController.registerUser);
//router.post('/login');
router.delete('/user/:login', userAccountController.removeUser);
router.patch('/user/:login', userAccountController.updateUser);
router.patch('/user/:login/role/:role', userAccountController.changeRoles);
router.patch('/:login/password', userAccountController.changePassword);
//router.get('/:login');

export default router;