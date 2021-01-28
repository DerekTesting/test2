const btnTop = document.querySelector('.menu--up');
const btnBottom = document.querySelector('.menu--down');
const itemsFloor = document.querySelectorAll('.menu__floor-item');
itemsFloor.forEach((item,index) => item.style.order = itemsFloor.length-index);


btnTop.addEventListener('click', function (evt) {
    
    if(evt.target){

    }
})