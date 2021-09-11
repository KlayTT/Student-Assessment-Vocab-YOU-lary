const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
        <div id="prime-container">
                <div id="filter-buttons"></div>
            <div id="form-container"></div>
        <div id="cards-display"></div>
    </div>     
  `;
};

export default domBuilder;
