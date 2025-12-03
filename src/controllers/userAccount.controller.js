import userAccountService from '../services/userAccount.service.js';

class UserAccountController {
    async registerUser(req, res, next) {
        try {
            const user = await userAccountService.registerUser( req.body );
            return res.json( user );
        } catch (err) {
            return next( err );
        }
    }

    async loginUser(req, res, next) {

    }

    async removeUser(req, res, next) {
        try {
            const user = await userAccountService.removeUser( req.params.login );
            return res.json(user);
        } catch (err) {
            return next( err );
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await userAccountService.updateUser( req.params.login, req.body );
            return res.json( user );
        } catch (err) {
            return next( err );
        }
    }
    async changeRoles(req,res,next){
        try {
            const { login, role } = req.params;
            const { isAddRole } = req.body;
            const result = await userAccountService.changeRoles( login, role, isAddRole );
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    }
    async changePassword(req, res, next){
        try {
            const { password:newPassword } = req.body;
            const resultChange = await userAccountService.changePassword( req.params.login, newPassword );
            return res.json(resultChange );
        } catch (err) {
            return next(err);
        }
    }
    async getUser(req, res, next){

    }
}
export default new UserAccountController();