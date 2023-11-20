import { renderPictureElements } from './rendering.js';
import { showPicture } from './full-picture.js';

const picturesPlace = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesPlace.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('[data-picture-id]');

    if (!pictureElement) {
      return;
    }

    evt.preventDefault();

    const pictureId = +pictureElement.dataset.pictureId;
    const pictureData = pictures.find(({ id }) => id === pictureId);
    showPicture(pictureData);

  });
  renderPictureElements(pictures, picturesPlace);
};

export { renderGallery };
