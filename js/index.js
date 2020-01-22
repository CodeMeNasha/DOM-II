// Your code goes here

const funBusClick = document.querySelector('.intro img');
funBusClick.addEventListener('mouseenter', () => {
    funBusClick.style.transform = 'scale(.8)';
})


funBusClick.addEventListener('mouseleave', () => {
    funBusClick.style.transform = 'scale(1.0)';
})


const secondImage = document.querySelector('.img-content img')
secondImage.addEventListener('dblclick', () => {
    alert('yay this works');
})

const tryMouseover = document.querySelector('.text-content p')
tryMouseover.addEventListener('mouseover', () => {
    event.target.style.color = "purple";
})


tryMouseover.addEventListener('mouseleave', () => {
    event.target.style.color = 'pink';
})

const twoClicks = document.querySelectorAll("img");
    twoClicks[2].addEventListener("dblclick", () => {
    twoClicks[2].src = "img/NASHA.png";
    })


const onClick = document.querySelector("h2")
onClick.addEventListener('auxclick', () => {
    onClick.style.color = "red";
    })

const wheel = document.querySelectorAllll("h2")
wheel.addEventListener('wheel', () => {
    event.target.style.transform
})