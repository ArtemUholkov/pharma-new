const iinflu = document.querySelector('.im_influ_wrapper');
const ineedinflu = document.querySelector('.i_need_influ_wrapper');
const butswrapper = document.querySelector('.im_im_items_wrapper');
const iinflubut = document.querySelector('.im_im_influ');
const ineedinflubut = document.querySelector('.im_need_inf');
const returnbut = document.querySelector('.inf_back_button');

iinflubut.addEventListener('click', (event) => {
  event.preventDefault();

  iinflu.classList.add('show_block');
  butswrapper.classList.add('hide_block');
  returnbut.classList.remove('hide_block');
});
ineedinflubut.addEventListener('click', (event) => {
  event.preventDefault();

  ineedinflu.classList.add('show_block');
  butswrapper.classList.add('hide_block');
  returnbut.classList.remove('hide_block');
});

returnbut.addEventListener('click', (event) => {
  event.preventDefault();

  ineedinflu.classList.remove('show_block');
  iinflu.classList.remove('show_block');
  butswrapper.classList.remove('hide_block');
  returnbut.classList.add('hide_block');
});
