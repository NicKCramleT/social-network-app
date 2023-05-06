import { homeController } from './controllers/homeController.js';
import './styles/globals.css';

const routes = [{ 
  path: '/', controller: homeController.showHome
}];

function init() {
  const currentPath = window.location.pathname;
  const route = routes.find(route => route.path === currentPath);
  route.controller();
}

window.addEventListener('DOMContentLoaded', init);