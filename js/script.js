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

const modalChangeRate = $('.open-modal-rate');
const modalChangeRateClose = $('.change-rate .icon-close');

targetsModals.forEach((target) => {
  target.addEventListener('click', e => {
    const getModalId = target.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.add('show');
    }
  })
})

modalChangeRate.forEach((target) => {
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

modalChangeRateClose.forEach((modalId) => closeModal(modalId))


function closeModal(modalId){
  modalId.addEventListener('click', e => {
    const getModalId = modalId.dataset.modalid;

    if(getModalId){
      $el(getModalId).classList.remove('show');
    }
  })
}




const mobileFilter = $('.mobile-filter');
const mobileFilterClose = $('.mobile-filter-body .close');

mobileFilterClose.forEach((modalId) => closeModal(modalId))

mobileFilter.forEach((target) => {
  target.addEventListener('click', e => {
    const getModalId = target.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.add('show');
    }
  })
})


// FOR MOBILE MENU
const mobileMenu = $el('.mobile-menu-board');
const menu = $el('.mobile-menu');
const mobileMenuBody = $el('.mobile-menu-body');


mobileMenu?.addEventListener('click', e => {
  mobileMenu.classList.toggle('active')
  mobileMenuBody.classList.toggle('active')
})



const input = document.getElementById('animated-placeholder-input');
const placeholder = document.querySelector('.placeholder');

// Hide placeholder on focus and restore it on blur if the input is empty
input?.addEventListener('focus', () => {
  placeholder.style.display = 'none';
});

input?.addEventListener('blur', () => {
  if (!input.value) {
    placeholder.style.display = 'block';
  }
});



const defCheckoutInput = $('.def-checkout-input input');

defCheckoutInput.forEach((input) => {
  input.addEventListener('focus', e => {
    input.parentElement.parentElement.classList.add('active');
  })
  input.addEventListener('blur', e => {

    if(input.value === ''){
      input.parentElement.parentElement.classList.remove('active');
    }

  })
})

defCheckoutInput.forEach((input) => {
  if(input.value){
    input.parentElement.parentElement.classList.add('active');
  }
})

const mileageCards = $('.mileage-cards');
const mileageCardsBody = $('.mileage-cards-body');


mileageCards.forEach((mileageCard, index) => {
  mileageCard.addEventListener('click', e => {
    if(mileageCard.classList.contains('active')) {
      mileageCardsBody[index].classList.add('hidden');
    } else {
      mileageCardsBody[index].classList.remove('hidden');
    }
    mileageCard.classList.toggle('active');
  })
})




const goCheckout = $el('#go-checkout');
const BtnGoCheckout = $el('.btn-go-checkout');


goCheckout?.addEventListener('input', function(){
  if(this.checked){
    BtnGoCheckout.removeAttribute('disabled')
  } else {
    BtnGoCheckout.setAttribute('disabled', 'true')
  }
})



const defTooltip = $('.def-tooltip');
let idT = '';

defTooltip.forEach((tooltipId) => {
  tooltipId.addEventListener('mouseenter', e => {
    idT = `and_tooltip_${Math.floor(Math.random() * 5000)}`;
    const getElemPos = tooltipId.getBoundingClientRect();
    const getTitle = tooltipId.title;

    const contentType = tooltipId.dataset.img;

    document.body.insertAdjacentHTML('beforeend', `
      <div id="${idT}" class="def-tooltip-body" style="left: ${getElemPos.x}px; top: ${getElemPos.y}px">
          ${PrintBodyTooltip(contentType, getTitle)}
      </div>
    `)
  })

  tooltipId.addEventListener('mouseout', e => {
    const getElem = $el(`#${idT}`);
    getElem.outerHTML = '';
  })
})


function PrintBodyTooltip(type, content){
  if(type){
    return `<img src="${content}" alt="Image tooltip" />`
  } else {
    return content
  }
}



const selectCardCheckout = $('[name="select-card"]');
const cardSolid = $el('#card-solid');
const buy = $el('.buy');
const cardBack = $('.card-back');
const checkoutCardsBody = $('.checkout-cards-body');

selectCardCheckout.forEach((input) => {
  input.addEventListener('change', e => {
    const status = e.target.value;

    selectCardCheckout.forEach((el) => {
      $el(`#${el.value}`).classList.add('hidden');
      el.parentElement.classList.add('hidden');
      el.classList.add('hidden');
    })

    cardBack.forEach((el) => {
      el.classList.remove('hidden');
    })

    $el(`#${status}`).classList.remove('hidden');
    input.parentElement.classList.remove('hidden');
    cardSolid.classList.add('hidden')
    buy.removeAttribute('disabled');

  })
})

cardBack.forEach((backBtn) => {
  backBtn.addEventListener('click', e => {
    cardSolid.classList.remove('hidden')
    checkoutCardsBody.forEach((el) => {
      el.classList.add('hidden');
    })

    selectCardCheckout.forEach((el) => {
      el.parentElement.classList.remove('hidden');
      el.classList.remove('hidden');
    })

    cardBack.forEach((el) => {
      el.classList.add('hidden');
    })

    buy.setAttribute('disabled', 'true');
  })
})


const inputs = $(".num-input");
const codeError = $el("#code-error");
const btnSuccess = $el(".btn-success");

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (
      e.key !== "Backspace" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight" &&
      !/^\d$/.test(e.key)
    ) {
      e.preventDefault();
    }

    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });

  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      if (index + 1 < inputs.length) {
        inputs[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  });

  input.addEventListener("keyup", () => {
    checkInputs();
  });
});


function checkInputs() {
  const values = Array.from(inputs).map(input => input.value).join("");

  const allFilled = Array.from(inputs).every(input => input.value !== "");

  if (allFilled) {
    if (values === "112233") {
      codeError.classList.add('hidden');
      btnSuccess.removeAttribute('disabled');
    } else {
      codeError.classList.remove('hidden');
      btnSuccess.setAttribute('disabled', 'true');
      inputs.forEach((_input) => {
        _input.style.borderColor = 'red';
      })
    }
  } else {
    console.log('please write all input')
    codeError.classList.add('hidden');
    btnSuccess.setAttribute('disabled', 'true');
    inputs.forEach((_input) => {
      _input.style.borderColor = '#6A8AFF';
    })
  }
}

const svgLoading = $('.loading svg');

svgLoading.forEach((svg) => {
  let activeCount = 0;
  const rects = svg.querySelectorAll('rect');
  setInterval(() => {
    rects.forEach((rect) => {
      rect.setAttribute('fill', '#E6E8EB');
    })
    rects[activeCount].setAttribute('fill', '#1150CB');
    rects[activeCount].style.transition = '0.2s';
    if(rects[activeCount - 1]){
      rects[activeCount - 1].style.transition = '0.8s';
    }
    activeCount += 1;
    if(activeCount === rects.length) {
      activeCount = 0;
    }
  }, 130)
})


const codeWriting = $el("#code-writing");
const waiting = $el("#waiting");
const sendCode = $el("#send-code");
const success = $el("#success");


setTimeout(() => {
  codeWriting?.classList.remove('hidden');
  waiting?.classList.add('hidden');
}, 3000)

sendCode?.addEventListener('click', (e) => {
  success.classList.remove('hidden')
  codeWriting.classList.add('hidden')
})


const navUserProfile = $el('.nav-user-profile');
const navUserProfileBody = $el('#nav-user-profile-body');
const navUserProfileFon = $el('#nav-user-profile-fon');

navUserProfile?.addEventListener('click',openCloseNavUserMenu)
navUserProfileFon?.addEventListener('click',openCloseNavUserMenu)

function openCloseNavUserMenu(){
  navUserProfileBody.classList.toggle('hidden')
  navUserProfileFon.classList.toggle('hidden')
}



const addDocModal = $('.add-doc-modal');

addDocModal.forEach((doc) => {
  const _btn = doc.querySelector('button');
  doc.querySelector('.example').classList.remove('hidden');
  const example = `${doc.querySelector('.example').outerHTML}`;

  doc.querySelector('.example').outerHTML = '';

  _btn.addEventListener('click', (e) => {
    doc.insertAdjacentHTML('afterbegin', example)
  })
})