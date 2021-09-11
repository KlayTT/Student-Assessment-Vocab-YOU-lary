import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getVocabCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabCards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabCards.json`, cardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/vocabCards/${response.data.name}.json`, body)
        .then(() => {
          getVocabCards(cardObj).then(resolve);
        });
    }).catch((error) => reject(error));
});

export { getVocabCards, createCard };
