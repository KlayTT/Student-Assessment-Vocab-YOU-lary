import addCardForm from '../components/forms/addCardsForm';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('logout-button')) {
      signOut();
    }

    if (e.target.id.includes('add-card-btn')) {
      addCardForm();
    }
  });
};

export default navigationEvents;
