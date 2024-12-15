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



// FUNCTION FOR OPEN MODALS


const targetsModals = $('.target-modal');
const modalClose = $('.modal-close');
const closeModals = $('.close-modals');
const modalFon = $('.modal-fon');

targetsModals.forEach((target) => {
  target.addEventListener('click', e => {
    const getModalId = target.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.add('show');
    }
  })
})

modalClose.forEach((modalId) => closeModal(modalId))
closeModals.forEach((modalId) => closeModal(modalId))

modalFon.forEach((modalId) => closeModal(modalId))


function closeModal(modalId){
  modalId.addEventListener('click', e => {
    const getModalId = modalId.dataset.modalid;

    if(getModalId){
      $el(getModalId).classList.remove('show');
    }
  })
}



// FOR MOBILE MENU
const mobileMenu = $el('.mobile-menu-board');
const menu = $el('.mobile-menu');


mobileMenu?.addEventListener('click', e => {
  mobileMenu.classList.toggle('active')
  console.log('ss')
})
