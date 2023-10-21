import './util.js';
import {similarPhotoDescriptions} from './data.js';

const NAME = [
  'Тинки-Винки',
  'Дипси',
  'Ляля',
  'По',
];

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];
  return () => {
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createMessage = () =>
  Array.from ({ length: getRandomInteger(1, 2) },
    () => getRandomArrayElement(MESSAGE),
  ).join(' ');

const generateCommentId = createRandomIdGenerator(1, 1000);
const createComment = () => {
  const randomAvatarComment = getRandomInteger(1, 6);

  return {
    id: generateCommentId(),
    avatar: `img/avatar-${randomAvatarComment}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAME),
  };
};

const randomIdIndex = createRandomIdGenerator(1, 25);
const randomUrlIndex = createRandomIdGenerator(1, 25);

const createPhotoDescription = () => {
  const randomLikesIndex = getRandomInteger(15, 200);
  return {
    id: randomIdIndex(),
    url: `photos/${randomUrlIndex()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikesIndex,
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
  };
};

const similarPhotoDescriptions = Array.from({ length: SIMILAR_PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);
