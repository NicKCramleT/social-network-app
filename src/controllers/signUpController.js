import { SignupView } from '../views/sigup/signupView.js';

export const signUpController = {
  async showSignupForm() {
    const homeView = new HomeView(document.querySelector('#app'));
    console.log(homeView)
    homeView.render();
  }
};