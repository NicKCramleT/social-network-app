import '../../styles/header.css';

export class HeaderView {
  constructor(container) {
    this.container = container;
    this.template = `<div id="user-info" class="user-info"></div>`;
  }

  render(user) {
    this.container.innerHTML = this.template;
    createheader(user);
  }

  update() {
    // Esta función se encargaría de actualizar la vista si hay algún cambio
  }
}

function createheader(user){
  const headerContainer = document.getElementById('user-info');
  headerContainer.innerHTML = `
    <div class="user-image">
      <img src="${user.photoURL}" alt="${user.displayName}">
    </div>
    <div class="user-name">
      <h3>Hola, ${user.displayName}</h3>
    </div>`;
}