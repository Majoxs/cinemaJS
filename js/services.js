const API_KEY = '5a2e12de7305619e9353d547e7f726e8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';



const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Что-то пошло не так, ошибка: ${response.status}`
  })
  .catch(err => console.error(err));



export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getTop = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};

export const getPopular = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};
