function toggleMenu() {

    var navList = document.getElementById("dropdown");
    
    if (navList.style.display === "none") {
        // display, and show in line
        navList.classList.remove("d-none");
        navList.classList.remove("d-md-flex");
        navList.style.display = "flex";
    } else {
        // hide
        navList.classList.add("d-none");
        navList.classList.add("d-md-flex");
        navList.style.display = "none";
    }
}
