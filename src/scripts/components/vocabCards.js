import clearDom from '../helpers/data/clearDom';

const showVocabCards = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';

  array.forEach((item) => {
    document.querySelector('#cards-display').innerHTML += `
    <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}
          </h5>
          <h2 class="card-lang" style="bold">${item.language_Tech}</h2>
          <p>${item.definition}</p>
        <hr>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
    </div>`;
  });
};

export default showVocabCards;
