const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';

const httpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const serverRoute = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные',
  SEND_DATA: 'Ошибка загрузки файла',
};

const request = (route, errorText, method = httpMethod.GET, body = null) =>
  fetch(`${SERVER_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getPictures = () => request(serverRoute.GET_DATA, ErrorText.GET_DATA);

const sendPictures = (body) => request(serverRoute.SEND_DATA, ErrorText.SEND_DATA, httpMethod.POST, body);

export { getPictures, sendPictures };
