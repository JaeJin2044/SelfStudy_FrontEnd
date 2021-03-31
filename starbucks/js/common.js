
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


// footer 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
