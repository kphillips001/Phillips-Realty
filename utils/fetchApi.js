import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com/';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'b1d1f9de72mshdec285e9327618bp1acb75jsn7a454cf173de',
    },
  });

  return data;
};

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/agencies/list',
//   params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},

// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
