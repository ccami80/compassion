var header=document.querySelector('header'),
mainMenuList=document.querySelectorAll('.mainmenu>li'),
subMenu=document.querySelectorAll('.submenu'),
headerHeight=header.offsetHeight,
subMenuHeight=0;




for(var i=0;i<mainMenuList.length;i++){
  mainMenuList[i].addEventListener('mouseover',function(){
    subMenuHeight=this.querySelector('.submenu').offsetHeight;
    header.style.height=headerHeight+subMenuHeight+'px';
  });
  mainMenuList[i].addEventListener('mouseout',function(){
    header.style.height=headerHeight+'px'
  })
}

header.addEventListener('mouseover',function(){
  header.classList.add('fix')
})

//스크롤 되면




// scroll reveal

const revealElement=document.querySelectorAll("[data-reveal]");
const revealElementOnScroll=function(){
  for(let i=0, len=revealElement.length; i<len; i++){
    // if(revealElement[i].getBoundingClientRect().top<window.innerHeight/1.15){
    if(revealElement[i].getBoundingClientRect().top<window.innerHeight/1.5){
      revealElement[i].classList.add('revealed')
    }else{
      revealElement[i].classList.remove('revealed')
    }
  }
}
window.addEventListener("scroll",revealElementOnScroll);
window.addEventListener("load",revealElementOnScroll)




// number ani
let nums = document.querySelectorAll(".help-container .num");
let section = document.querySelector(".help");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}