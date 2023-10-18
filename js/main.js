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

const createRandomIdFromRangeGenerator = (min, max) => {
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


const createComment = () => {
  const randomIdComment = createRandomIdFromRangeGenerator(0, Infinity);
  const randomAvatarComment = getRandomInteger(1, 6);
  const randomMessageComment = getRandomInteger(0, MESSAGE.length - 1);
  const randomNameComment = getRandomInteger(0, NAME.length - 1);

  return {
    id: randomIdComment(),
    avatar: 'img/avatar-' + randomAvatarComment + '.svg',
    message: MESSAGE[randomMessageComment],
    name: NAME[randomNameComment],
  };
};

const randomCommentsQuantity = getRandomInteger(0, 30);
const similarComments = Array.from({ length: randomCommentsQuantity }, createComment);

const createPhotoDescription = () => {
  const randomIdIndex = createRandomIdFromRangeGenerator(1, 25);
  const randomUrlIndex = createRandomIdFromRangeGenerator(1, 25);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(15, 200);

  return {
    id: randomIdIndex(),
    url: 'photos/' + randomUrlIndex() + '.jpg',
    description: DESCRIPTION[randomDescriptionIndex].toString(),
    likes: randomLikesIndex,
    comments: similarComments,
  };
};

const similarPhotoDescriptions = Array.from({ length: SIMILAR_PHOTO_DESCRIPTION_COUNT }, createPhotoDescription);
console.log(similarPhotoDescriptions);
