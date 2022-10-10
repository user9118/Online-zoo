
let burgerButton = document.querySelector('.header_burger')
let header = document.querySelector('.header_container')
let header_nav= document.querySelector('.header_nav')

burgerButton.onclick = function(){
  header.classList.toggle('menu_burger')
}
header_nav.onclick = function(){
  header.classList.toggle('menu_burger')
}

let pay_input = document.querySelector('.pay_input');
let dot_radio = document.querySelectorAll('.dot_radio');
let dot_value;

dot_radio.forEach((el) => {
  el.addEventListener('change', function(e) {
    dot_value = e.target.value;
    console.log(dot_value);
    pay_input.value = dot_value;
  })
})

let pay_value;
pay_input.addEventListener('input', (e) => {
  dot_radio.forEach((el) => {
    el.removeAttribute('checked');
  })
  if (pay_input.value == 5000) {
    pay_value = document.querySelector('input[value="5000"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 2000){
    pay_value = document.querySelector('input[value="2000"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 1000){
    pay_value = document.querySelector('input[value="1000"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 500){
    pay_value = document.querySelector('input[value="500"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 250){
    pay_value = document.querySelector('input[value="250"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 100){
    pay_value = document.querySelector('input[value="100"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 50){
    pay_value = document.querySelector('input[value="50"]');
    pay_value.setAttribute('checked', 'checked')
  } else if (pay_input.value == 25){
    pay_value = document.querySelector('input[value="25"]');
    pay_value.setAttribute('checked', 'checked')
  } else {
    dot_radio.forEach((el) => {
      el.removeAttribute('checked');
    })
  }
})
