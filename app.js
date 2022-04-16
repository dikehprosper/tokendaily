const menu = document.querySelector('div.menuList');
window.addEventListener("scroll", function() {
    let navArea = document.getElementById("navArea");
    
    if (window.pageYOffset > 0) {
        navArea.classList.add("is-sticky");
    } else {
        navArea.classList.remove("is-sticky");
    }
});
window.addEventListener("click", function() {
    return menu.classList.add("slideOut")
});

function openMenu ()  {
    return menu.classList.add("slideIn")
}