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
    return menu.classList.remove("slideIn")
});

function openMenu (e)  {
   
        if(menu.style.display == "none"){
            menu.style.display = "flex";
        }
        else{
            menu.style.display = "none";
            menu.classList.add('slideOut')
        }
        e.preventDefault()
}