import domBuilder from '../../scripts/components/domBuilder';
import logoutButton from '../../scripts/components/logoutButton';
import navBar from '../../scripts/components/navBar';
import { getVocabCards } from '../../scripts/helpers/data/vocabData';
import showVocabCards from '../../scripts/components/vocabCards';
import navigationEvents from '../../scripts/events/navEvents';
import domEvents from '../../scripts/events/domEvents';

const startApp = () => {
  // console.warn(user);

  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getVocabCards().then((vocabCards) => showVocabCards(vocabCards));
};

export default startApp;
