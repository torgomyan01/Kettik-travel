function $(target){
  return document.querySelectorAll(target);
}

function $el(target){
  return document.querySelector(target);
}


AOS.init({
  duration: 1000
})


const searchVector = $el('.search .vector');


setTimeout(() => {
  searchVector?.classList.add('active');
}, 1000)

searchFormInputFunction()
function searchFormInputFunction(){
  const searchFormInp = $('.search-form-inp');
  const inputForNumberTel = $('.input-for-number-tel');

  searchFormInp.forEach((input, index) => {
    input.querySelector('input')?.addEventListener('focus', e => {
      input.classList.add('focus');
    })
    input.querySelector('input')?.addEventListener('blur', e => {
      input.classList.remove('focus');
    })
  })

  inputForNumberTel.forEach((input, index) => {
    input.addEventListener('focus', e => {
      input.parentElement.classList.add('border-tel-input');
    })
    input.addEventListener('blur', e => {
      input.parentElement.classList.remove('border-tel-input');
    })
  })
}


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

    console.log(getModalId)

    if(getModalId){
      $el(getModalId).classList.add('show');
      document.body.classList.add('overflow-hidden');
    }
  })
})

modalChangeRate.forEach((target) => {
  target.addEventListener('click', e => {
    const getModalId = target.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.add('show');
      document.body.classList.add('overflow-hidden');
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
      document.body.classList.remove('overflow-hidden');
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
      document.body.classList.add('overflow-hidden');
    }
  })
})


// FOR MOBILE MENU
const mobileMenu = $el('.mobile-menu-board');
const menu = $el('.mobile-menu');
const mobileMenuBody = $el('.mobile-menu-body');


mobileMenu?.addEventListener('click', e => {
  if(mobileMenu.classList.contains('active')){
    mobileMenu.classList.remove('active')
    mobileMenuBody.classList.remove('active')
    document.body.classList.remove('overflow-hidden')

  } else {
    mobileMenu.classList.add('active')
    mobileMenuBody.classList.add('active')
    document.body.classList.add('overflow-hidden')
  }
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
    const contentType = tooltipId.dataset.img;
    const getTitle = tooltipId.title;

    if(window.innerWidth > 768){
      printTooltip(contentType, getTitle)
    } else {

      if(contentType){
        printTooltip(contentType, getTitle)
      } else {
        setTimeout(() => {
          $el('#mobile-filter-body-all').classList.add('show');
        }, 50)
        $el('#mobile-filter-body-text').innerText = getTitle;
      }
    }

  })


  function printTooltip(contentType, getTitle){

    idT = `and_tooltip_${Math.floor(Math.random() * 5000)}`;
    const getElemPos = tooltipId.getBoundingClientRect();
    const xPos = tooltipId.dataset.x;

    document.body.insertAdjacentHTML('beforeend', `
      <div id="${idT}" class="def-tooltip-body" style="left: ${getElemPos.x}px; top: ${getElemPos.y}px; --xpos: ${xPos};">
          ${PrintBodyTooltip(contentType, getTitle)}
      </div>
    `)
  }

  tooltipId.addEventListener('mouseout', e => {
    const contentType = tooltipId.dataset.img;

    if(window.innerWidth > 768){
        const getElem = $el(`#${idT}`);
        getElem.outerHTML = '';
    }
  })
})


function PrintBodyTooltip(type, content){
  if(type){
    return `<img src="${content}" alt="Image tooltip" style="min-width: 100px" />`
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


if($el(".mySwiper")){
  const swiper =  new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: false,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
      1280: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '#next-slider',
      prevEl: '#prev-slider',
    },
  });

  // Ստուգում ենք երբ հասնում ենք վերջ
  swiper.on('reachEnd', () => {
    document.querySelector('#next-slider').setAttribute('disabled', 'true');
  });

// Ստուգում ենք երբ հասնում ենք սկիզբ
  swiper.on('reachBeginning', () => {
    document.querySelector('#prev-slider').setAttribute('disabled', 'true');
  });

// Երբ սկիզբը կամ վերջը չեն
  swiper.on('fromEdge', () => {
    document.querySelector('#next-slider').removeAttribute('disabled');
    document.querySelector('#prev-slider').removeAttribute('disabled');
  });
}


const picker = $('.time-picker .picker');
const inputSelectTime = $el('.input-select-time');
const selectBodyTime = $el('.select-body-time');


picker?.forEach((item) => {
  const items = item.querySelectorAll('.item');
  const itemHeight = 44;
  let scrollTop = 0;
  let activeItem = 0;

  let isScrolling;

  item.addEventListener('scroll', (e) => {
    e.preventDefault();

    scrollTop = item.scrollTop;
    activeItem = Math.floor((scrollTop + 8) / itemHeight);

    items.forEach((_it) => {
      _it.classList.remove('active');
    })

    const active = activeItem >= items.length - 1 ? items.length - 1 : activeItem;

    items[active - 1] ? items[active - 1].style.transform = 'scale(0.8)' : null;
    items[active - 2] ? items[active - 2].style.transform = 'scale(0.6)' : null;
    items[active].style.transform = 'scale(0.9)';
    items[active + 1] ?  items[active + 1].style.transform = 'scale(0.8)' : null;
    items[active + 2] ? items[active + 2].style.transform = 'scale(0.6)' : null


    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      pickerCorrections(item, scrollTop, activeItem, itemHeight)
      items[active].classList.add('active');
      items[active].style.transform = 'scale(1)';




      const day = $el('.desktop-select-time .days .active').innerHTML;
      const hours = $el('.desktop-select-time .hours .active').innerHTML;
      const minutes = $el('.desktop-select-time .minutes .active').innerHTML;


      inputSelectTime.querySelector('input').value = `${day}, ${hours}:${minutes}`;

    }, 100);

  });


  item.addEventListener('wheel', (event) => {
    event.preventDefault();

    if(event.deltaY > 0) {
      activeItem += 1;
    } else {
      activeItem -= 1;
    }

    console.log(itemHeight)

    const top = activeItem * itemHeight;
    item.scrollTo({ top: top, behavior: 'smooth' });
  });

})


function pickerCorrections(item, scrollTop, activeItem, itemHeight){
  const top = activeItem * itemHeight;

  item.scrollTo({ top: top, behavior: 'smooth' });

}


const targetModalToolTip = $('.target-tooltip');
const closeToolTipMobile = $('.close-tooltip');


targetModalToolTip?.forEach((item) => {
  item.addEventListener('click', e => {
    const getModalId = item.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.add('show');
    }
  })
})

closeToolTipMobile?.forEach((item) => {
  item.addEventListener('click', e => {
    const getModalId = item.dataset.targetid;

    if(getModalId){
      $el(getModalId).classList.remove('show');
    }
  })
})

const saveSelectedTime = $el('.save-selected-time');
const selectTimeInput = $el('.select-time-input');

saveSelectedTime?.addEventListener('click', function(){
  const day = $el('.mobile-select-data .days .active').innerHTML;
  const hours = $el('.mobile-select-data .hours .active').innerHTML;
  const minutes = $el('.mobile-select-data .minutes .active').innerHTML;

  selectTimeInput.value = `${day}, ${hours}:${minutes}`;
})


const desktopSelectTimeFon = $el('.desktop-select-time-fon');

inputSelectTime?.addEventListener('click', function (){
  selectBodyTime.classList.toggle('hidden');
  desktopSelectTimeFon.classList.toggle('show');
  document.body.classList.toggle('overflow-hidden');
})
desktopSelectTimeFon?.addEventListener('click', function (){
  selectBodyTime.classList.toggle('hidden');
  desktopSelectTimeFon.classList.toggle('show');
  document.body.classList.toggle('overflow-hidden');
})


const tabBody = $('.tab-body');


tabBody.forEach((_body) => {
  const tabs = _body.querySelectorAll('.tabs');
  const tabContent = _body.querySelectorAll('.tab-content');

  tabs.forEach((item) => {
    item.addEventListener('click', e => {
      tabs.forEach((_tab) => {
        _tab.classList.remove('active');
      })
      item.classList.add('active');

      tabContent.forEach((_tabContent) => {
        _tabContent.classList.add('hidden');
      })

      const id = item.dataset.tabid;

      $el(id).classList.remove('hidden');

    })
  })
})

const dropdownNav = $('.dropdown-nav');
openCloseDropDownNavbar('#parent-nav-dropdown', '#nav-dropdown', '#font-for-close');
openCloseDropDownNavbar('#parent-change-language', '#drop-change-language', '#fon-change-language');
openCloseDropDownNavbar('#parent-change-currency', '#drop-change-currency', '#fon-change-currency');

function openCloseDropDownNavbar(parent, dropdown, fon) {
  const parentNavDropdown = $el(parent);
  const nawDropDown = $el(dropdown);
  const fontForClose = $el(fon);


  nawDropDown?.addEventListener('click', (e) => {
    dropdownNav.forEach((item) => {
      item.classList.remove('active');
    })
    parentNavDropdown.classList.toggle('active');
  })

  fontForClose?.addEventListener('click', (e) => {
    parentNavDropdown.classList.toggle('active');
  })
}






const transplantsTabs = $('.transplants-tabs');

transplantsTabs.forEach((item) => {
  item.addEventListener('click', e => {
    transplantsTabs.forEach((_tab) => {
      _tab.classList.remove('bg-purple', 'text-white');
      _tab.classList.add('bg-[#DEEAFF]', 'text-[#11181C]');
    })

    item.classList.add('bg-purple', 'text-white');
  })
})


const selectButton = $('.select-button');

selectButton.forEach((item) => {
    item.addEventListener('click', e => {
      ['text-white', 'bg-purple', 'border'].forEach(cls => item.classList.toggle(cls));
      item.querySelector('i').classList.toggle('hidden');

    })
})



const faqQuestion = $('.faq-question');


faqQuestion.forEach((item) => {

  item.id = `And_project_${Math.floor(Math.random() * 1000000)}`;

  item.addEventListener('click', e => {
    faqQuestion.forEach((_faqItem) => {
      if(_faqItem.id !== item.id) {
        _faqItem.parentElement.classList.remove('active');
      }
    })

    item.parentElement.classList.toggle('active');
  })
})


const userProfileDropdown = $el('#user-profile-dropdown');

userProfileDropdown?.addEventListener('click', function (){
  userProfileDropdown.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function () {

  const mobileFilterBlockOld = $el("#mobile-filter-block-position");
  const offsetTopOld = mobileFilterBlockOld?.offsetTop;

  document.addEventListener("scroll", function () {
    checkAndFixed(offsetTopOld, $el("#mobile-filter-block"))
  });

  checkAndFixed(offsetTopOld, $el("#mobile-filter-block"))

})


function checkAndFixed(Old, Block){
  const offsetTop = Block?.offsetTop;

  if (Old <= offsetTop) {
    Block?.classList.remove("filter-is-sticky");
  } else {
    Block?.classList.add("filter-is-sticky");
  }
}


const search = $el('.search');
const selectMe = $el('.selectMe');
const nav = $el('.nav');
const searchBilet = $el('#search-bilet');
let headerHeight = search.getBoundingClientRect();
const homeSearchContainer = $el('#home-search-container');


let avia = true;

const searchTabs = $('.search .tabs');
searchTabs.forEach((item) => {
  item.addEventListener('click', e => {

    if(window.innerWidth < 1281){
      avia = item.dataset.tabid === '#form-Search-ticket';

      const search = $el('.search');
      headerHeight = search.getBoundingClientRect();
      selectMe.style.marginTop = `${headerHeight.height}px`;
    }
  })
})



let lastKnownScrollY = 0;
let ticking = false;


window.addEventListener('load', function () {

  if(document.body.dataset.page === 'home' || document.body.dataset.page === 'launges'){

    if(window.innerWidth < 1280 && selectMe){
      selectMe.style.marginTop = `${headerHeight.height + 50}px`;
    }

    setTimeout(function () {
      window.scrollTo(0, 0);

      AnimationHeaderHome();

      document.body.style.opacity = '1';
    }, 10)
  } else {
    document.body.style.opacity = '1';
  }

})

window.addEventListener('scroll', function () {
  AnimationHeaderHome()
});

function AnimationHeaderHome(){
  if(window.innerWidth > 1280){
    return;
  }


  lastKnownScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      const scrollTop = lastKnownScrollY;
      const currentPercent = (scrollTop * 100) / (headerHeight.height - (headerHeight.height / 1.5));


      if (currentPercent < 120) {
        const op = ((100 - currentPercent) / 100);

        search.classList.remove('fixed-top');

        // search.style.height = `${headerHeight.height - scrollTop}px`;
        searchBilet.style.opacity = `${1 - op}`;
        searchVector.style.opacity = `${op}`;
        selectMe.style.marginTop = `${headerHeight.height - scrollTop}px`;
        homeSearchContainer.style.opacity = `${op}`;
        homeSearchContainer.style.transform = `translateY(${currentPercent}%)`;
      }

      let tabRes;

      if(document.body.dataset.page === 'home'){
        tabRes = avia ?
          checkWindowsWidth(window.innerWidth, 768, 120, 120) :
          checkWindowsWidth(window.innerWidth, 768, 75, 95);
      } else if(document.body.dataset.page === 'launges'){
        tabRes = checkWindowsWidth(window.innerWidth, 768, 100, 100)
      }


      if (currentPercent > tabRes) {
        let afterAnim = (-tabRes + currentPercent) * (avia ? 2 : 1.4);
        afterAnim = Math.max(0, afterAnim);
        search.classList.add('fixed-top');

        if(afterAnim < 60){
          // nav.style.transform = `translateY(-${afterAnim}px)`;
          // search.style.transform = `translateY(-${afterAnim}px)`;
        }

        if(afterAnim > 70){
          // search.style.transform = `translateY(-59px)`;
          // search.style.transition = `transition: 0.3s transform, border-radius`;
        }
      } else {
        nav.style.transform = 'translateY(0px)';
        search.style.transform = 'translateY(0px)';
      }

      ticking = false;
    });

    ticking = true;
  }
}

function checkWindowsWidth(windowWidth, needWidth, count, def){
  if(windowWidth > needWidth){
    return count
  } else {
    return def
  }
}

const rangeDay = $('.range-day');

rangeDay.forEach((item) => {

  const startTime = $el(item.dataset.starttime);
  const endTime = $el(item.dataset.endtime);

  noUiSlider.create(item, {
    start: [0, 1440],
    connect: true,
    step: 15,
    range: {
      'min': 0,
      'max': 1440
    },
  });

  item.noUiSlider.on('update', function (values, handle) {
    const hourStart = (+values[0] / 60).toFixed(2).replace(/[.]/g, ':');
    const hourEnd = (+values[1] / 60).toFixed(2).replace(/[.]/g, ':');

    startTime.innerText = hourStart;
    endTime.innerText = hourEnd;
  });

})


if($el(".slider-hotels-checkout")){
  const swiper =  new Swiper(".slider-hotels-checkout", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 1,
    loop: false,
    navigation: {
      nextEl: '#slider-hotels-checkout-next-slider',
      prevEl: '#slider-hotels-checkout-prev-slider',
    },
    breakpoints: {
      // 300: {
      //   slidesPerView: 1,
      // },
      // 768: {
      //   slidesPerView: 2,
      // },
      // 1024: {
      //   slidesPerView: 1,
      // },
      // 1280: {
      //   slidesPerView: 2,
      // },
    },
  });

//   // Ստուգում ենք երբ հասնում ենք վերջ
//   swiper.on('reachEnd', () => {
//     document.querySelector('#next-slider').setAttribute('disabled', 'true');
//   });
//
// // Ստուգում ենք երբ հասնում ենք սկիզբ
//   swiper.on('reachBeginning', () => {
//     document.querySelector('#prev-slider').setAttribute('disabled', 'true');
//   });
//
// // Երբ սկիզբը կամ վերջը չեն
//   swiper.on('fromEdge', () => {
//     document.querySelector('#next-slider').removeAttribute('disabled');
//     document.querySelector('#prev-slider').removeAttribute('disabled');
//   });
}


$el('#select-calendar-desktop')?.addEventListener('click', function(){
  this.classList.add('active');
})



const searchFormDynamic = $el('.search-form-dynamic');
const addDynmicForm = $el('.add-dynmic-form');
const dynamicFormContainer = $el('.dynamic-form-container');

searchFormDynamic?.classList.remove('hidden');

const searchFormDynamicHtml = searchFormDynamic.outerHTML;
searchFormDynamic.outerHTML = '';


addDynmicForm.addEventListener('click', function(){
  dynamicFormContainer.insertAdjacentHTML('beforeend', searchFormDynamicHtml);
  getAllCloseDynamicFrom();
  searchFormInputFunction()
})



function getAllCloseDynamicFrom(){
  const searchFormDynamicClose = $('.search-form-dynamic-close');

  searchFormDynamicClose.forEach((item) => {
    item.addEventListener('click', function(){
      this.parentElement.outerHTML = '';
    })
  })

}