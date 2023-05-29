
import '../../styles/postingboard.css';

export class PostingboardView {
  constructor(container) {
    this.container = container;
    this.template = `<div id="posts-container"></div>`;
  }

  render(posts) {
    this.container.innerHTML = this.template;
    createPosts(posts);
  }

  update() {
    // Esta función se encargaría de actualizar la vista si hay algún cambio
  }
}

function createPosts(posts) {
  const postsContainer = document.getElementById('posts-container');
  posts.forEach(post => {
    const postCard = createPostCard(post);
    postsContainer.insertAdjacentHTML('beforeend', postCard);
  });
}

function createHeader(post) {
  return `
    <div class="header">
      <h2>${post.title}</h2>
      <div class="meta">
        <span class="likes-count">${post.likes}</span>
        <i class="fas fa-thumbs-up like-btn"></i>
        <span class="dislikes-count">${post.dislikes}</span>
        <i class="fas fa-thumbs-down dislike-btn"></i>
      </div>
    </div>
  `;
}

function createAuthorInfo(post) {
  return `
    <div class="author-info">
      <div class="author-image">
        <img src="${post.author.image}" alt="Imagen del autor">
      </div>
      <div class="author-name">
        <h3>${post.author.name}</h3>
      </div>
    </div>
  `;
}

function createBody(post) {
  return `
    <div class="body">
      <p>${post.message}</p>
    </div>
  `;
}

function createComment(comment) {
  return `
    <li class="comment">
      <div class="meta">
        <span class="author">${comment.author.name}</span>
        <span class="likes">${comment.likes}</span>
        <span class="dislikes">${comment.dislikes}</span>
      </div>
      <div class="body">
        <p>${comment.message}</p>
      </div>
    </li>
  `;
}

function createCommentSection(post) {
  const comments = post.comments.map(comment => createComment(comment)).join('');
  console.log(comments);
  return `
    <div class="comments">
      <button class="toggle-comments" onClick="event.target.nextElementSibling.classList.toggle('comment-hidden')">Ver comentarios</button>
      <div class="comment-section comment-hidden">
        <h3>Comentarios</h3>
        <ul class="comment-list">
          ${comments}
        </ul>
      </div>
    </div>
  `;
}

function createPostCard(post) {
  const header = createHeader(post);
  const authorInfo = createAuthorInfo(post);
  const body = createBody(post);
  const commentSection = createCommentSection(post);
  return `
    <div class="container-posts">
      <div class="message">
        ${authorInfo}
        ${header}
        ${body}
        ${commentSection}
      </div>
    </div>
  `;
}