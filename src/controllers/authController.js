import { FirebaseService } from '../services/firebaseService.js';
import { PostingboardView } from '../views/postingboard/postingboardView.js';

export const authController = {

  async createUserWithEmailAndPassword(email, password) {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signUpWithEmail(email, password);
      const postingboardView = new PostingboardView(document.querySelector('#app'));
      postingboardView.render(user);
    } catch (error) {
      console.log('Error iniciando sesion con usuario y password:', error.message);
    }
  },

  async doLogin(email, password) {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signIn(email, password);
      const postingboardView = new PostingboardView(document.querySelector('#app'));
      postingboardView.render(user);
    } catch (error) {
      console.log('Error iniciando sesion con usuario y password:', error.message);
    }
  },

  async signInWithGoogle() {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signInWithGoogle();
      return user;
    } catch (error) {
      console.log('Error iniciando sesion con Google:', error.message);
    }
  }

  

};