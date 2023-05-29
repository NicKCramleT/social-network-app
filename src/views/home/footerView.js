import '../../styles/footer.css';

export class FooterView {
  constructor(container) {
    this.container = container;
    this.template = `
      <div class="footer-bar">
        <button id="post-comment__btn" class="footer-circle">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="form-container" id="form-container">
        <form>
          <label for="title">Título:</label>
          <input type="text" id="title" name="title" required>
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    `;
  }

  render() {
    this.container.innerHTML = this.template;
    applyFormToogleListener(this.container);
  }

  update() {
    // Esta función se encargaría de actualizar la vista si hay algún cambio
  }
}

function applyFormToogleListener(){
  const form = container.querySelector('#post-comment__btn');
  form.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("click");
    if (formContainer.style.display === "block") {
      formContainer.style.display = "none";
    } else {
      formContainer.style.display = "block";
    }
  });
}