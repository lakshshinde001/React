import conf from '../conf/conf.js'

import {Client, Account, ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){

        // console.log('AppWrite URL:', conf.appWriteUrl); // Log the URL
        // console.log(conf.appWriteDatabaseId);

        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6670f9f800279f77d16a')
        this.account = new Account(this.client)
    }
    async createAccount ({email, password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error){
            console.log(error.message);;
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser (){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("AppWrite Service :: getCurrent User :: ", error);
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteIdentity()
        } catch (error) {
            console.log("AppWrite Service :: logout User :: ", error);
        }
    }
}

const authService = new AuthService()
export default authService;