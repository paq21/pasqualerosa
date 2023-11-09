




  document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.querySelector(".nav-bar");
    const indexButton = document.querySelector(".index-button");
    const indexContent = document.querySelector(".index");

    indexButton.addEventListener("click", function () {
        navBar.classList.toggle("active");
        indexContent.classList.toggle("active");
    });
});
