import showVocabCards from '../components/vocabCards';
import { createCard } from '../helpers/data/vocabData';

const domEvents = () => {
  document.querySelector('#prime-container').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-card')) {
      e.preventDefault();
      console.warn('click');
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_Tech: document.querySelector('#language_Tech').value,
        // time:
      };
      console.warn(cardObject);
      createCard(cardObject).then((cardArray) => showVocabCards(cardArray));
    }
  });
};

export default domEvents;
