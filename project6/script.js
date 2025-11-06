const hambar = document.querySelector("#hambar");
const box = document.querySelector(".box");

hambar.addEventListener("click", () => {
    box.classList.toggle("seeBox");
    
    if (hambar.classList.contains("fa-bars")) {
        hambar.classList.remove("fa-bars")
        hambar.classList.add("fa-xmark")
    }else {
        hambar.classList.remove("fa-xmark")
        hambar.classList.add("fa-bars")
    }
});