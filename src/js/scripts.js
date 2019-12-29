//@prepros-prepend intersection-observer.js
//@prepros-prepend lozad.min.js


// Initialize lozad

const observer = lozad('.lazy-load', {
    rootMargin: '100px 0px', // syntax similar to that of CSS Margin
});
observer.observe();

/*
    SHIFTING COLORS ~ Chameleon
    Written by King'ori
    Documented here: http://kingori.co/minutae/2013/04/shifting-colors/
*/

// Initialize object
var Chameleon = {};

Chameleon.noOfColors = 12; // should be in CSS, with the transitions
Chameleon.duration = 6; // should match the transition duration in css

Chameleon.init = function() {

    // Grab the body, we will be using it a lot
    Chameleon.bodyElement = document.getElementsByTagName("BODY")[0];

    // ~~ faster than Math.floor() -> http://rocha.la/JavaScript-bitwise-operators-in-practice
    Chameleon.colorT = 0;
    Chameleon.changeColor();

    // Defaults to @orange and @skyblue on hover if we aren't doing this.
};

// Switch colors
Chameleon.changeColor = function() {
    Chameleon.bodyElement.classList.remove( 'color' + Chameleon.colorT % Chameleon.noOfColors );
    Chameleon.colorT++;
    Chameleon.bodyElement.classList.add( 'color' + Chameleon.colorT % Chameleon.noOfColors );
    setTimeout( Chameleon.changeColor, Chameleon.duration * 1000 );
};

// Get ready, set ... GO!
Chameleon.init();

/* end Chameleon */

/*
    Dark Mode Color Scheme Toggle
*/

function toggleNightMode() {
    localStorage.setItem('colorScheme', 'night');
    root.style.setProperty('--bg-color', '#000');
    root.style.setProperty('--text-color', '#f9f7fc');
    root.style.setProperty('--bg-faint', '#222222')
    root.style.setProperty('--bg-mask', 'rgba(0,0,0,.7)')
    document.getElementById("night-mode").classList.add('is-active');
    document.getElementById("day-mode").classList.remove('is-active');
}

document.getElementById('night-mode').addEventListener('click', toggleNightMode);

function toggleDayMode() {
    localStorage.setItem('colorScheme', 'day');
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty('--text-color', '#0e0028')
    root.style.setProperty('--bg-faint', '#f3f3f3')
    root.style.setProperty('--bg-mask', 'rgba(255,255,255,.7)')
    document.getElementById("day-mode").classList.add('is-active');
    document.getElementById("night-mode").classList.remove('is-active');
}

document.getElementById('day-mode').addEventListener('click', toggleDayMode);

if(localStorage.getItem("colorScheme")==="night") {
    document.getElementById("night-mode").classList.add('is-active');
    document.getElementById("day-mode").classList.remove('is-active');
} else {
    document.getElementById("day-mode").classList.add('is-active');
    document.getElementById("night-mode").classList.remove('is-active');
}
