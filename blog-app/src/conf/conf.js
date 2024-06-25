const conf = {
    appWriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appWriteCollectionsId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTIONS_ID),
    appWriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID)
}

export default conf;
