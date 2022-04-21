/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll("section"); //select all sections
const navBar= document.getElementById("navbar"); // select the navbar

let navHtmlList= ' '; //string to store the html code for the navList

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// build the nav
function createNavBar(){
  for (const section of sections){
    navHtmlList+= `<li class="${section.id}"> <a  href="#${section.id}" id="navli">  ${section.dataset.nav} </a></li>`;
  } //loop to create the html code of the navList , the href is the piece of code which make it toggle to the section
navBar.innerHTML=navHtmlList; //adding the html code inside the navBar
}
createNavBar(); //creating the navigation bar

/** now making the highlights at the nav menu on scroll**/
const navli=document.querySelectorAll("li"); //selecting all the navlists made
window.addEventListener('scroll',()=>{
  let current = ''; //this variable will store the id of the section active
  sections.forEach(section => {
  const sectionTop=section.offsetTop;
  const sectionHeight = section.clientHeight;
  if(pageYOffset>=(sectionTop - sectionHeight/3)){
    current=section.getAttribute('id');//storing the id of the active section
  }
  })
for(const li of navli){

li.setAttribute('id',''); //remove the active id if found
  if (li.classList.contains(current)) //checking the active section
  {
    li.setAttribute('id','active'); //// Add id 'active' to section when near top of viewport

  }
}
});
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

