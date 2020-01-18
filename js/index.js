// Your code goes here
const funBusClick = document.querySelector('.intro img');
funBusClick.addEventListener('mouseenter', () => {
    funBusClick.style.transform = 'scale(.8)';
})
funBusClick.addEventListener('mouseleave', () => {
    funBusClick.style.transform = 'scale(1.0)';
})
