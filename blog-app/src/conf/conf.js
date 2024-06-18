const conf = {
    appWriteUrl : String(process.env.REACT_APP_APPWRITE_URL),
    appWriteProjectId : String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appWriteDatabaseId : String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    appWriteCollectionsId : String(process.env.REACT_APP_APPWRITE_COLLECTIONS_ID),
    appWriteBucketId : String(process.env.REACT_APP_APPWRITE_BUCKET_ID)
}

export default conf;