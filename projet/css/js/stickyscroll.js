
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() };

// recuperer les elements
let header = document.getElementById('sticky header');
let stickycomponent = header.offsetTop;

// faire la function
function sticky() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky")
    }
}