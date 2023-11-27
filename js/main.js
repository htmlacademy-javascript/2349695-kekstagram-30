import { renderGallery } from './gallery.js';
import './form.js';
import { getPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filters.js';


const bootstrap = async () => {
  try {
    const pictures = await getPictures();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();


