import { authController} from '../../controllers/authController'
import '../../styles/signup.css';

export class SignupView {
  constructor(container) {
    this.container = container;
    this.template = `
    <div class="container">
      <div class="box">
        <h2>Crea una nueva cuenta</h2>
        <form class="signup-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
          </div>
          <div class="form-group">
            <label for="password-confirm">Confirma tu contraseña:</label>
            <input type="password" id="password-confirm" name="password-confirm" required>
          </div>
          <button type="submit" class="btn-signup">Registrarse</button>
        </form>
      </div>
    </div>
    `;
  }

  render() {
    this.container.innerHTML = this.template;
    applySubmitListener(this.container);
  }

}

function applySubmitListener(container) {
  const form = container.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    authController.createUserWithEmailAndPassword(email, password);
  });
}