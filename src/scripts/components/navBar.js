const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="https://w0.peakpx.com/wallpaper/945/599/HD-wallpaper-black-star-cool-crisp-dark-pentagram-texture.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <a class="nav-link" href="#" id="create-card">Create Card</a>
        </a>
    </div>
    <div id="logout-button"></div>
    </div>
</nav>
`;
};

export default navBar;
