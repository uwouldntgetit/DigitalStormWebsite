"use strict"

let previousScrollPosition = 0;
const nav = document.querySelector("nav");
let isWaiting;
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");


const isScrollingDown = () => {
    let currentScrollPosition = window.scrollY;
    let isScrollingDown = false;

    if(currentScrollPosition > previousScrollPosition)
        isScrollingDown = true;

    previousScrollPosition = currentScrollPosition;

    return isScrollingDown;
}

// add classes scroll-down and scroll-up to the list of classes of the nav element 
const handleNavScroll = () => {
    if (isScrollingDown() && !nav.contains(document.activeElement)){
        nav.classList.add("scroll-down");
        nav.classList.remove("scroll-up");
        return;
    }    

    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
}

// to make performance better the handleNavScroll will be called only
// every 150 ms

const optimize = (callback, time) => {
    if(isWaiting) return;

    isWaiting = true;

    setTimeout(() => {
        callback();
        isWaiting = false;
    }, time);
}


// if the device wants animations, it calls optimize
document.addEventListener("scroll", () => {
    if(mediaQuery && !mediaQuery.matches)
    optimize(handleNavScroll, 250)
});


