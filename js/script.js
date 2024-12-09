function $(target){
  return document.querySelectorAll(target);
}

function $el(target){
  return document.querySelector(target);
}


const searchFormInp = $('.search-form-inp');

searchFormInp.forEach((input, index) => {
  input.querySelector('input').addEventListener('focus', e => {
    input.classList.add('focus');
  })
  input.querySelector('input').addEventListener('blur', e => {
    input.classList.remove('focus');
  })
})
