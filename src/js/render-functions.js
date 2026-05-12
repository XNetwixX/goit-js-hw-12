import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>

        <div class="image-info">
          <div class="image-info-item">
            <p class="image-info-title">Likes</p>
            <p class="image-info-value">${image.likes}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Views</p>
            <p class="image-info-value">${image.views}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Comments</p>
            <p class="image-info-value">${image.comments}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Downloads</p>
            <p class="image-info-value">${image.downloads}</p>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}