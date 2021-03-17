
//===============HEADER===========
// document는 요소다 html이라고 생각 해도됨 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

// blur는 focus가 해제 되었을떄 
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

//===============Badge관련===========

const badgeEl = document.querySelector('header .badges');

// 스크롤 할때마다 익명의 함수를 실행 하겠다.
// lodash에서 제공하는 기능 _.throttle
// _.throttle(함수,몇초에 한번 실행? 시간적어줌)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기 
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, 0.6, {
      //숫자는 숫자로 입력 가능하지만, 문자는 ''붙여야함.
      opacity : 0,
      display: 'none'
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity : 1,
      display :'block'
    });
  
  }
},300));
//여기까지하면 너무 부자연스러워서 자바스크립트 animation 도입
// gsap라이브러리