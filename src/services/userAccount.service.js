import userAccountRepository from "../repositories/userAccount.repository.js";

class UserAccountService {

    async registerUser(user) {
        return await userAccountRepository.addUser( user );
    }

    async loginUser(login) {
        const userAccount = await userAccountRepository.findUser( login );
        if (!userAccount) {
            throw new Error( `User with login ${login} not found` )
        }
        return userAccount;
    }

    async removeUser(login) {
        const userAccount = await userAccountRepository.removeUser( login );
        if (!userAccount) {
            throw new Error( `User with login ${login} not found` )
        }
        return userAccount;
    }

    async updateUser(login, user) {
        const userAccount = await userAccountRepository.updateUser( login, user );
        if (!userAccount) {
            throw new Error( `User with login ${login} not found` )
        }
        return userAccount;
    }

    async changeRoles(login, role, isAddRole) {
        role = role.toUpperCase();
        let userAccount ;
        if (isAddRole) {
            userAccount= await userAccountRepository.addRole( login, role );
        } else {
            userAccount = await userAccountRepository.removeRole( login, role );
        }
        if(!userAccount){
            throw new Error( `User with login ${login} not found` )
        }
        userAccount.firstName = userAccount.lastName = undefined;
        const{roles,userName=login} = userAccount;
        return {roles,login:userName};
    }

    async changePassword(login, newPassword) {

    }

}

export default new UserAccountService();