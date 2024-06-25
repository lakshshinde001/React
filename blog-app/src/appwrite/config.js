import conf from "../conf/conf.js"
import {Client, Databases, Storage, Query, ID} from 'appwrite'

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6670f9f800279f77d16a')
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                '6670fb9400050f5850fe', 
                '6670fbb70019912f51a5',
                slug
            )
        } catch (error) {
            console.log("Appwrite Error :: getPost () :: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
           return await this.databases.listDocuments(
                '6670fb9400050f5850fe',
                '6670fbb70019912f51a5',
                queries)
    
        } catch (error) {
            console.log("Appwrite Error :: getPost () :: ", error);
            return false;
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                '6670fb9400050f5850fe',
                '6670fbb70019912f51a5',
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Error :: createPost () :: ", error);
            return false;
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                '6670fb9400050f5850fe',
                '6670fbb70019912f51a5',
                slug,
                {
                    title,  content, featuredImage, status
                }
            )
        } catch (error) {
            console.log("Appwrite Error :: updatePost () :: ", error);
            return false;
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                '6670fb9400050f5850fe',
                '6670fbb70019912f51a5',
                slug,  
            )
            return true;
        } catch (error) {
            console.log("Appwrite Error :: deletePost () :: ", error);
            return false;
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                '6670fd5900109142abe9',
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Error :: upload File  () :: ", error);
            return false;
        }
    }
    async deletFile(fileId){
        try {
            return this.bucket.deleteFile(
                '6670fd5900109142abe9',
                fileId
            )
        } catch (error) {
            console.log("Appwrite Error :: Delete File  () :: ", error);
            return false;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            '6670fd5900109142abe9',
            fileId
        ).href
    }
}

const service = new Service();
export default service;
