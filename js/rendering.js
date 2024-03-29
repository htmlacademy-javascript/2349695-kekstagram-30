const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotosFragment = document.createDocumentFragment();

const createPictureElement = ({ url, description, likes, comments, id }) => {
  const pictureElement = similarPicturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;

  return pictureElement;
};

const renderPictureElements = (pictures, container) => {
  pictures.forEach((picture) => {
    const pictureElement = createPictureElement(picture);
    similarPhotosFragment.append(pictureElement);
  });
  container.append(similarPhotosFragment);
};

export { renderPictureElements };
