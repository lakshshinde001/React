import conf from "../conf/conf.js"
import {Client, Databases, Storage, Query, ID} from 'appwrite'

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionsId,
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
                conf.appWriteDatabaseId,
                conf.appWriteCollectionsId,
                queries)
    
        } catch (error) {
            console.log("Appwrite Error :: getPost () :: ", error);
            return false;
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionsId,
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
                conf.appWriteDatabaseId,
                conf.appWriteCollectionsId,
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
                conf.appWriteDatabaseId,
                conf.appWriteCollectionsId,
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
                conf.appWriteBucketId,
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
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Error :: Delete File  () :: ", error);
            return false;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        ).href
    }
}

const service = new Service();
export default service;
