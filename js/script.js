function $(target){
  return document.querySelectorAll(target);
}

function $el(target){
  return document.querySelector(target);
}


AOS.init({
  duration: 1000
})

const searchFormInp = $('.search-form-inp');

searchFormInp.forEach((input, index) => {
  input.querySelector('input').addEventListener('focus', e => {
    input.classList.add('focus');
  })
  input.querySelector('input').addEventListener('blur', e => {
    input.classList.remove('focus');
  })
})


const sliderPartners = $('.slider-partners');

sliderPartners.forEach((partner) => {
  const logos = Array.from(partner.children);

  Array.from({length: 30}).forEach((_, index) => {
    const clonedLogos = logos.map((logo) => logo.cloneNode(true));
    clonedLogos.forEach((clone) => partner.appendChild(clone));

    if(index === 29){
      partner.classList.add('start');
    }
  })



})