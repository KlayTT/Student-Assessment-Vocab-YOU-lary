const domEvents = () => {
  document.querySelector('#prime-container').addEventListener('click', (e) => {
    console.warn(e);
  });
};

export default domEvents;
