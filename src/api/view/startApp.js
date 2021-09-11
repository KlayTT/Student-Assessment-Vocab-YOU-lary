import domBuilder from '../../scripts/components/domBuilder';
import logoutButton from '../../scripts/components/logoutButton';
import navBar from '../../scripts/components/navBar';

const startApp = (user) => {
  console.warn(user);

  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
