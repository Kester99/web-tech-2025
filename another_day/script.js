/** code for navigation bar */

function openNav() {
    document.querySelector('.nav').style.width = '250px'; // adjusts width of navbar
    document.querySelector('#main').style.marginLeft = '250px'; // shifts main content
}

function closeNav() {
    document.querySelector('.nav').style.width = '0'; // collapse navbar
    document.querySelector('#main').style.marginLeft = '0'; // resets main content
}


/** code for hamburger icon */
function myFunction(x) {
    x.classList.toggle('change'); // toggles the hamburger icon
    if (document.querySelector('.nav').style.width === '250px') {
        closeNav(); // close nav if it's open
    }
    else {
        openNav(); // open nav if it's closed
    }
}