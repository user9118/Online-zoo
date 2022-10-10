
//burger
let burgerButton = document.querySelector('.header_burger')
let header = document.querySelector('.header_container')
let header_nav= document.querySelector('.header_nav')

burgerButton.onclick = function(){
  header.classList.toggle('menu_burger')
}
header_nav.onclick = function(){
  header.classList.toggle('menu_burger')
}

//animals
let gap = 30

const carousel1 = document.querySelector(".animals_corusel1"),
carousel2 = document.querySelector(".animals_corusel2"),
content = document.querySelector(".animals_corusel_row"),
animalsCard = document.querySelector(".animals_card"),
next = document.querySelector(".right"),
prev = document.querySelector(".left");

let cardWidth = animalsCard.offsetWidth;
let widthContent = content.offsetWidth;

window.addEventListener("resize", e => (widthContent = carousel1.offsetWidth));

next.addEventListener("click", e => {
  next.disabled = true;
  if (content.scrollWidth - widthContent - gap < carousel1.scrollLeft + widthContent) {
    carousel1.scrollBy(-(9*cardWidth + 8*gap), 0);
    carousel2.scrollBy(-(9*cardWidth + 8*gap), 0);
  } else {
    carousel1.scrollBy(widthContent + gap, 0);
    carousel2.scrollBy(widthContent + gap, 0);
  }
  setTimeout(() => {
    next.disabled = false;
  }, 500)
});

prev.addEventListener("click", e => {
  prev.disabled = true;
  if (carousel1.scrollLeft <= 0) {
    carousel1.scrollBy(9*cardWidth + 8*gap, 0);
    carousel2.scrollBy(9*cardWidth + 8*gap, 0);
  } else {
    carousel1.scrollBy(-(widthContent + gap ), 0);
    carousel2.scrollBy(-(widthContent + gap ), 0);
  }
  setTimeout(() => {
    prev.disabled = false;
  }, 500)
});

//revives
const inputElement = document.querySelector('.revives_scroll'),
reviews_sliader = document.querySelector('.reviews_sliader'),
reviews_card = document.querySelector('.reviews_card');

let inputValue = inputElement.value;
let reviews_cardWidth = reviews_card.offsetWidth;

console.log(inputValue);
console.log(reviews_cardWidth);

let delta = 0
let rangeValue = function(){
  let newValue = inputElement.value;
  delta = Number(newValue) - Number(inputValue);
  inputValue = newValue;
  reviews_sliader.scrollBy((reviews_cardWidth + 29) * delta, 0);
}

inputElement.addEventListener("input", rangeValue);


//
let modalOverlay = document.querySelector('.overlay_modal');
let reviews_cards = document.querySelectorAll('.reviews_card');
let x = document.querySelector('.x_modal');
console.log(x)

reviews_cards.forEach((el) => {
  el.addEventListener('click', (e) => {
    reviews_cards = el;
    el.classList.add('modal');
    modalOverlay.classList.add('overlay');
    x.classList.add('x')
  });
}) 

modalOverlay.addEventListener('click', (e) =>{

  modalOverlay.classList.remove('overlay');
  reviews_cards.classList.remove('modal');
  x.classList.remove('x')
});

//donate

