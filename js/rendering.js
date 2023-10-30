import { similarPhotoDescriptions } from './mockes.js';

const picturesPlace = document.querySelector('.picture');
const similarPicturesTemplate = document.querySelector('#picture').content;
const similarPhotos = similarPhotoDescriptions();
const similarPhotosFragment = document.createDocumentFragment();

similarPhotos.forEach(({ url, description, likes, comments }) => {
  const pictureElement = similarPicturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  similarPhotosFragment.append(pictureElement);
});

picturesPlace.append(similarPhotosFragment);
