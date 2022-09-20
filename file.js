let answer = document.querySelectorAll(".ans")
let image = document.querySelectorAll(".icon")
let arr



for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function(){
        image[i].nextElementSibling.classList.toggle("show")
        image[i].classList.toggle("active")
        image[i].firstChild.lastChild.classList.toggle("rotate")
        // answer[i].classList.toggle("show")
    })
    



}

// pic.addEventListener("click", function(){
//     answer.classList.toggle("show")
// })