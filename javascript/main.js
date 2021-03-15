
//요일 6(토요일) , 0(일요일), 1(월요일)


/**
 * 
    #표기법 
    - dash-case(kebab-case)
        > 단어 사이사이에 -r기호 사용 하는 것 
        > html,css에서 주로 사용
    - snake_case
        > _를 통해 사용 

    - camelCase
        > 가장 첫글자 소문자 그 다음부터는 대문자
        > 주로 js에서 사용 

    - PascalCase
        > 가장 첫 글자를 대문자로 시작한다. 

    - Zero-based Numbering
        > 숫자를 셀 때 0부터 센다. 

 * 
 */
console.log(new Date('2021-03-15').getDay());

// =======================데이터 타입 ====================

//String(문자 데이터)
let myName = "jaejin";
let email = "shzhem764@naver.com";
let hello = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello);

console.log("======================");

//Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타낸다.
let number = 123;
let opacity = 1.57;
console.log(number);
console.log(opacity);

console.log("======================");
//Boolean(불린 데이터)
//ture, false 두가지 밖에 없음

let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

console.log("======================");
//Undifined
// 값이 할당되지 않은 상태를 나타낸다.

let undef;
let obj = { abc:1234};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

console.log("======================");

// Null 
// 어떤값이 의도적으로 비어있음을 의미한다.
// {의도적}이라는 말이 포커스임
// undifined는 의도적으로 비어있는게 아님

let empty = null;
console.log(empty);

console.log("======================");

// Object(객체 데이터)
// 여러 데이터 Key:Value 형태로 저장 

let user = {
    name : 'jaejin',
    age : 28,
    isValid : true
};
console.log(user.name);
console.log(user.age);
console.log(user.isValid);

console.log("======================");

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장
let fruits = ['apple','banana','orange'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("======================");


//  ============================================


//변수 var(권장x), let, const
let a = 2; 
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//let (변수를 재할당 가능) 
a = 15;
console.log(a);

//const(재할당 불가능)
const num = 100;
// num = 150; 코드 에러 

console.log('num = '+num);


//예약어(특별한 의미를 가지고 있어 , 사용 불가)

// ====================================================

//함수 
// -특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

//함수 선언
function hellofFunc(){
    //실행 코드
    console.log('안녕 함수 실행');
}

// 함수 호출
hellofFunc();


function returnFunc(){
    return 123;
}

let num2 = returnFunc();
console.log(num2);



//함수 선언
function sum(a,b){ // a,b는 매개변수(Parameters)
    return a+b;
}

let n1 = sum(1,20); //1,20는 인수(Arguments)
let n2 = sum(2,30);
let n3 = sum(5,10);
console.log(n1,n2,n3);


//기명(이름 있는)함수
// 함수 선언
function hello1(){
    console.log('안녕');
}

//익명(이름없는)함수 
// 함수를 선언한다는 표현이 아니라 함수를 표현한다고 말한다.
let world = function(){
    console.log('world');
}
hello1();
world();

// 객체 데이터
const heropy = {
    name:'jaejin',
    age : '99',
    //메소드
    getName : function(){
        return this.name;
    }
};

const hisName = heropy.getName();

console.log(hisName);
console.log(heropy.getName());
console.log(heropy.name);


// ========================================================
//DOM API
//Document Object Model , Application Programming Interface
// 자바스크립트에서 html을 제어하는 여러가지 명령들 

let boxElem = document.querySelector(".box");

//null이 출력됨(because scrip태그가 위에 있었기 떄문..)
//HTML 요소(Element)
// console.log('box Elem = '+boxElem);

// //HTML 요소에 적용할 수 있는 메서드 
// boxElem.addEventListener();

// // 인수(Arguments)를 추가 가능!
// boxElem.addEventListener(1,2);

// // 1- 이벤트(Event,상황)
// boxElem.addEventListener('click',2);

// 2- 핸들러 (Handler,실행할 함수)
boxElem1.addEventListener('click',function(){
console.log('Click~!~~');
})

//Html 요소(Element) 검색/찾기 
const boxElem1 = document.querySelector('.box');

//요소의 클래스 정보 객체 활용!
//클래스 추가 
boxElem1.classList.add('active');
//'active'라는 클래스를 포함하고 있니?
let isContains = boxElem1.classList.contains('active');
console.log(isContains);

boxElem.classList.remove('active');
isContains = boxElem1.classList.contains('active');
console.log(isContains);







