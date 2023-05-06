import { createUserWithEmailAndPassword } from '@firebase/auth';
import { FirebaseService } from '../services/firebaseService.js';
import { DashboardView } from '../views/dashboard/dashboardView.js';

export const authController = {

  async createUserWithEmailAndPassword(email, password) {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signUpWithEmail(email, password);
      const dashboardView = new DashboardView(document.querySelector('#app'));
      dashboardView.render(user);
    } catch (error) {
      console.log('Error iniciando sesion con usuario y password:', error.message);
    }
  },

  async doLogin(email, password) {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signIn(email, password);
      const dashboardView = new DashboardView(document.querySelector('#app'));
      dashboardView.render(user);
    } catch (error) {
      console.log('Error iniciando sesion con usuario y password:', error.message);
    }
  },

  async signInWithGoogle() {
    try {
      const firebaseService = new FirebaseService();
      let user = await firebaseService.signInWithGoogle();
      const dashboardView = new DashboardView(document.querySelector('#app'));
      dashboardView.render(user);
    } catch (error) {
      console.log('Error iniciando sesion con Google:', error.message);
    }
  }

  

};