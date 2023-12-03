import { renderPictureElements } from './rendering.js';
import { showPicture } from './full-picture.js';

const picturesPlace = document.querySelector('.pictures');
let showedPictures = [];

picturesPlace.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('[data-picture-id]');

  if (!pictureElement) {
    return;
  }

  evt.preventDefault();

  const pictureId = +pictureElement.dataset.pictureId;
  const pictureData = showedPictures.find(({ id }) => id === pictureId);
  showPicture(pictureData);
});

const renderGallery = (pictures) => {
  showedPictures = pictures;
  renderPictureElements(pictures, picturesPlace);
};

export { renderGallery };
