// Navbar och footer sparas som strängar, och skickas till varje HTML sida, så att man behöver inte upprepa kod, och så att man kan förändra alla sidors navbar och footer med endast ett dokument. DRY!

const navbar = `
<nav class="navbar navbar-expand-lg navbar-dark">
<a class="navbar-brand" href="index.html">Cannelle la Demoiselle</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        French Language
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="lessons.html">French Lessons</a>
      <a class="dropdown-item" href="proverbs.html">French Proverbs</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="mailto:test@example.com">Email Us for an Appointment!</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="links.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Links I Like
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="links.html">Links I Like</a>
      <a class="dropdown-item" href="thanks.html">Thanks</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="where.html">Where to Buy the Book</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="contact.html">Contact</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>`;
const footer = `
<footer>
<div class="container p-5">
  <div class="row">
    <div class="col-sm"><a href="contact.html">Contact Page</a></div>
    <div class="col-sm">Contact:  <a href="mailto: CannelleLaDemoiselle@gmail.com">CannelleLaDemoiselle@gmail.com</a></div>
    <div class="col-sm">© Cannelle la Demoiselle, 2020</div>
  </div>
</div>
</footer>`;

const body = document.querySelector('body');
const main = document.querySelector('main');
body.insertAdjacentHTML('afterbegin', navbar);
main.insertAdjacentHTML('afterend', footer);
