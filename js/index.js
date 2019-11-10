// Your code goes here

//event listener #1
const firstImg = document.querySelector("img");
console.log(firstImg)

firstImg.addEventListener("mouseenter", () => {
    firstImg.style.transform = "scale(1.2)";
    firstImg.style.transition  = "all 0.3s";
})

firstImg.addEventListener("mouseleave", () => {
    firstImg.style.transform = "scale(1.0)";
    firstImg.style.transition = "all 0.3s";
})

//event listener #2
const firstText = document.querySelectorAll("h2").forEach(element => {
    element.addEventListener("click", () => {
        element.style.transition = "all 0.3s";
        element.style.color = "green";
    })
});

//event listener #3
const twoClicks = document.querySelectorAll("img");
    twoClicks[1].addEventListener("dblclick", () => {
    twoClicks[1].src = "img/NASHA.png";
    })
  

