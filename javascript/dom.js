
let boxElem = document.querySelector('.box');
console.log(boxElem);

boxElem.addEventListener('click',function(){
    console.log('Click!~~');
    boxElem.classList.add('active');
    console.log(boxElem.classList.contains('active'));
    boxElem.classList.remove('active');
    console.log(boxElem.classList.contains('active'));
})

