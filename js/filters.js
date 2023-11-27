import { renderGallery } from './gallery.js';
import { getRandomIndex, debounce } from './util.js';

const MAX_RANDOM_FILTER = 10;
const REPAINT_DELAY = 500;
const ACTIVE_CLASS = 'img-filters__button--active';

const FilterEnum = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed',
};

const FilterHandlers = {
  [FilterEnum.DEFAULT]: (pictures) => pictures,
  [FilterEnum.RANDOM]: (pictures) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, pictures.length);
    while(randomIndexList.length < max) {
      const index = getRandomIndex(0, pictures.length);
      if(!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => pictures[index]);
  },
  [FilterEnum.DISCUSSED]: (pictures) => [...pictures].sort((picture1, picture2) => picture2.comments.length - picture1.comments.length)
};

const imgFilter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultButton = filterForm.querySelector('#filter-default');
const randomButton = filterForm.querySelector('#filter-random');
const discussedButton = filterForm.querySelector('#filter-discussed');

let activeButton = defaultButton;

const changeClasses = (button) => {
  activeButton.classList.remove(ACTIVE_CLASS);
  button.classList.add(ACTIVE_CLASS);
  activeButton = button;
};

const clearContainer = () => {
  const picturesList = document.querySelectorAll('.picture');
  picturesList.forEach((item) => item.remove());
};

const repaint = (filter, pictures) => {
  const filteredPictures = FilterHandlers[filter](pictures);
  clearContainer();
  renderGallery(filteredPictures);
};

const debouncedRepaint = debounce(repaint, REPAINT_DELAY);

export const initFilter = (pictures) => {
  imgFilter.classList.remove('img-filters--inactive');
  filterForm.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button') || evt.target === activeButton) {
      return;
    }
    changeClasses(evt.target);

    if (evt.target === defaultButton) {
      debouncedRepaint(FilterEnum.DEFAULT, pictures);
    }
    if (evt.target === randomButton) {
      debouncedRepaint(FilterEnum.RANDOM, pictures);
    }
    if (evt.target === discussedButton) {
      debouncedRepaint(FilterEnum.DISCUSSED, pictures);
    }
  });
};
