//check if li > a is active



let navActiveCheck = () => {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  const elements = document.getElementsByClassName('nav-item');
 
  for (let i = 0; i < elements.length; i++) {
    let href = elements[i].getAttribute('href');
    if (href === page) {
      
    }
  }
}
//check if current page is equal to the current href
//if current page (index.html) 
//is equal to li > a > href
//return active
const home = `index.html`;

//if li > a > href = current page
//add li class active

//start by identifying the li > a

const active = navActiveCheck();