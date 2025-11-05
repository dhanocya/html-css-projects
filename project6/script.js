const hambar = document.querySelector("#hambar")
const box = document.querySelector(".box")

hambar.addEventListener("click", () =>{
    box.classList.toggle("seeBox")
})