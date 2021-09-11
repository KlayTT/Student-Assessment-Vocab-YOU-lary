import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getVocabCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabCards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getVocabCards;
