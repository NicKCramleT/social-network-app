import { FirebaseService } from '../services/firebaseService.js';

export const postingboardController = {
  async getAllPosts() {
    const firebaseService = new FirebaseService();
    return firebaseService.getAllPosts();
  }
};