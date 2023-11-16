import { isEscapeKey, isEnterKey } from "./util";

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButton = bigPictureElement.querySelector('.big-picture__cancel');

const hidePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClosePictureButtonClick = () => {
  hidePicture();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({url, description, likes }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;

};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPicture(pictureData);
};

closePictureButton.addEventListener('click', onClosePictureButtonClick);


export { showPicture };
