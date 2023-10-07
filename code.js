const navBtn = document.querySelector('.container-burger');
const navIcon = document.querySelector('.bar1');
const navIcon2 = document.querySelector('.bar2');
const navIcon3 = document.querySelector('.bar3');
// const headerList = document.querySelector('.header-list');
const log = document.querySelector('.btn-log')
const sing = document.querySelector('.btn-sing')
const nav = document.querySelector('.menu-title')
const menuNav = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list')
const menuItem = document.querySelector('.menu-item')
//const navRemove = document.getElementById('#body')

navBtn.onclick = function () {
  navIcon.classList.toggle("change")
  navIcon2.classList.toggle("change")
  navIcon3.classList.toggle("change")
  // headerList.classList.toggle("click")
  nav.classList.toggle("click")
  log.classList.toggle("click")
  sing.classList.toggle("click")
  menuNav.classList.toggle("click")
  menuList.classList.toggle("click")
  menuItem.classList.toggle("click")
  //navRemove.classList.remove("click")

}
// function myFunc() {
//   const menuItem = document.querySelectorAll('.menu-item')// находим все элементы с классом block
//   for( let i = 0; i < menuItem.length; i++){ // проходим циклом по всем элементам объекта
//     menuItem[i].classList.toggle("click");
//   }
// }
// navBtn.forEach(e => {
//   e.addEventListener( "click" , () => {
//     menuItem.forEach(element => {
//       element.classList.toggle("click");
//     });
//   });
// })