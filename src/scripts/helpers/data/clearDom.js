const clearDom = () => {
  document.querySelector('#cards-display').innerHTML = '';
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
