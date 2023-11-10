let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

// Close Menu
let closeMenuHome = document.querySelector('#closeMenuHome');
let closeMenuAboutMe = document.querySelector('#closeMenuAboutMe');
let closeMenuMyProject = document.querySelector('#closeMenuMyProject');
let closeMenuContact = document.querySelector('#closeMenuContact');

closeMenuHome.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};
closeMenuAboutMe.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};
closeMenuMyProject.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};
closeMenuContact.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};


