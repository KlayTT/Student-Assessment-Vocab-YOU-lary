import domBuilder from '../../scripts/components/domBuilder';
import logoutButton from '../../scripts/components/logoutButton';
import navBar from '../../scripts/components/navBar';
import getVocabCards from '../../scripts/helpers/data/vocabData';
import showVocabCards from '../../scripts/components/vocabCards';

const startApp = () => {
  // console.warn(user);

  domBuilder();
  navBar();
  logoutButton();

  getVocabCards().then((vocabCards) => showVocabCards(vocabCards));
};

export default startApp;
