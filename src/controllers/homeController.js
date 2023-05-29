import { HomeView } from '../views/home/homeView.js';

export const homeController = {
  async showHome() {
    const homeView = new HomeView(document.querySelector('#app'));
    homeView.render();
  }
};