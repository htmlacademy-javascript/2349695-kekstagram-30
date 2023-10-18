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

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomId = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
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

const similarComments = Array.from({ length: getRandomInteger(0, 30) }, createComment);

const createPhotoDescription = () => {
  const randomIdIndex = createRandomId(1, 25);
  const randomUrlIndex = createRandomId(1, 25);
  const randomLikesIndex = getRandomInteger(15, 200);

  return {
    id: randomIdIndex(),
    url: `photos/${randomUrlIndex()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikesIndex,
    comments: similarComments,
  };
};

const similarPhotoDescriptions = Array.from({ length: SIMILAR_PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);
