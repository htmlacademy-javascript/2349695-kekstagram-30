import { getRandomArrayElement, getRandomInteger, createRandomId } from './util.js';

const DESCRIPTION = [
  'Моё фото',
  'Наслаждаюсь фотографией',
  'Красота!',
  'Все быстренько ставим лайки!',
  'Кайфую от этой фотографии',
  'Как вам фотокарточка?',
  'Photo by me',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Тинки-Винки',
  'Дипси',
  'Ляля',
  'По',
];

const PHOTO_COUNT = 25;
const COMMENT_COUNT = 30;

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) },
    () => getRandomArrayElement(MESSAGE),
  ).join(' ');


const createComment = () => {
  const randomIdComment = createRandomId(0, 25);
  const randomAvatarComment = getRandomInteger(1, 6);

  return {
    id: randomIdComment(),
    avatar: `img/avatar-${randomAvatarComment}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAME),
  };
};

const randomIdIndex = createRandomId(1, 25);
const randomUrlIndex = createRandomId(1, 25);

const createPhotoDescription = () => {
  const randomLikesIndex = getRandomInteger(15, 200);
  return {
    id: randomIdIndex(),
    url: `photos/${randomUrlIndex()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikesIndex,
    comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment),
  };
};

const similarPhotoDescriptions = () => Array.from({ length: PHOTO_COUNT }, createPhotoDescription);

export { similarPhotoDescriptions };
