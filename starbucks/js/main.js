
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


const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function(fadeEl,index){
  // 애니메이션처리를 위한 라이브러리 
  // gsap.to(요소,지속시간,옵션(객체데이터 형태));
  gsap.to(fadeEl,1,{
    delay : (index+1) * 0.7, //0.7, 1.4, 2.1 , 2.7 순으로 하나하나 동작한다.
    opacity : 1
  });
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical',
  autoplay : true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  // display:'horizontal' 기본값임
     slidesPerView : 3, //한번에 보여줄 슬라이드 개수 
     spaceBetween : 10, //슬라이드 사이 여백 
     centeredSlides : true, // 1번 슬라이드가 가운데 보이기
     loop: true,
     autoplay : {
        delay: 2000       //0.5초     
     },
     pagination : {
       el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자 
       clickable : true     //사용자의 페이지 번호 요소 제어 가능 여부 
     },
     navigation : {
       prevEl : '.promotion .swiper-prev',
       nextEl : '.promotion .swiper-next'
     }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  // true라면 false 전환 , false라면 true 전환 
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){
    //숨김 처리!!
    promotionEl.classList.add('hide');
  }else{
    //보임 처리!!
    promotionEl.classList.remove('hide');
  }
})



