let previousScrollPosition = 0;
const nav = document.querySelector("nav");




const isScrollingDown = () => {
    let currentScrollPosition = window.scrollY;
    let isScrollingDown = false;

    if(currentScrollPosition > previousScrollPosition)
        isScrollingDown = true;

    previousScrollPosition = currentScrollPosition;

    return isScrollingDown;
}

const handleNavScroll = () => {
    if (isScrollingDown()){
        nav.classList.add("scroll-down");
        nav.classList.remove("scroll-up");
        return;
    }    

    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
}
