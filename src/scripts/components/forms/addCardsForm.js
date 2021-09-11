import clearDom from '../../helpers/data/clearDom';

const addCardForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="submit-card-form" class="mb-4">
  <div class="form-group">
    <label for="title">Card Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Definition</label>
    <input type="text" class="form-control" id="definition" aria-describedby="cardDefinition" placeholder="Enter Card Definition" value="${obj.definition || ''}" required>
  </div>
  <div class="form-group">
    <label for="language_Tech">language or Tech</label>
    <input type="text" class="form-control" id="language_Tech" aria-describedby="cardLanguage_Tech" placeholder="Enter Language or Tech" value="${obj.language_Tech || ''}" required>
  </div>
  <div class="form-group" id="select-langTech">
  </div>
  <button type="submit" id="submit-card" class="btn btn-primary">Submit Card</button>
  </form>
  `;
};

export default addCardForm;
