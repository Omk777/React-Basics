import conf from "../conf/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    // Initialize Appwrite client
    this.client
      .setEndpoint(conf.appwriteUrl)       // API endpoint
      .setProject(conf.appwriteProjectId); // Project ID

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // ------------------------------
  // Posts (Table) methods
  // ------------------------------

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId, // Use tableId instead of collectionId
        ID.unique(),          // Unique ID for new document
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost({ id, title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId, // tableId
        id,                    // Document ID
        {
          title,
          content,
          featuredImage,
          status
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  // ------------------------------
  // File / Storage methods
  // ------------------------------

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

      getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

// Export singleton instance
const service = new Service();
export default service;
