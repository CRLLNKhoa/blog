// Search header
var btnSearchHeader = document.querySelector('.header__search');
var btnCloseSearchHeader = document.querySelector('.search__close')
var searchHeader = document.querySelector('.search');

function showSearchHeader(){
    searchHeader.classList.add('block');
}
function closeSearchHeader(){
    searchHeader.classList.remove('block');
}

btnSearchHeader.addEventListener('click',showSearchHeader);
btnCloseSearchHeader.addEventListener('click',closeSearchHeader);

// Menu header
var btnMenuHeader = document.querySelector('.header__menu');
var menuHeader = document.querySelector('.overlay');
var btnCloseMenuHeader = document.querySelector('.box-heading__close');

function showMenuHeader(){
   
}

btnMenuHeader.addEventListener('click',showMenuHeader);

// More btn

var btnMore = document.querySelector('.list-inline__link');
var slider = document.querySelector('.slider');

function morePosts(){
    slider.classList.add('none');
}

btnMore.addEventListener('click',morePosts);


// Menu moblie

var btnOpenHome = document.querySelector('.home-menu');
var homeMb = document.querySelector('.home-mb')

function showHomeMb(){
    homeMb.classList.toggle('block');
}
btnOpenHome.addEventListener('click',showHomeMb)