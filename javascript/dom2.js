
//HTML 요소 (Elements)모두 검색/찾기
const boxElems = document.querySelectorAll('.box');

// 찾은 요소를 반복해서 함수 실행!
// 익명 함수를 인수로 추가 !
boxElems.forEach(function(){
})

// 첫번째 매개변수(boxElem) : 반복중인 요소 ,
// 두번째 매개변수(index) : 반복 중인 번호 

boxElems.forEach(function(boxElem,index){});

//출력
boxElems.forEach(function(boxElem,index){
    boxElem.classList.add(`order-${index+1}`);
    console.log(index,boxElem);
})



