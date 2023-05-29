import { authController} from '../../controllers/authController'

export class DashboardView {
  constructor(container) {
    this.container = container;
    this.template = `
      <h1>Welcome Usuario</h1>
    `;
  }

  render(user) {
    this.container.innerHTML = this.template;
  }

  update() {
    // Esta función se encargaría de actualizar la vista si hay algún cambio
  }
}