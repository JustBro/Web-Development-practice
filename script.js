const brands = document.querySelector('.brands');
const brandsExp = document.querySelector('.brands__expunder');
const brandsList = document.querySelector('.brands__list');
const brandsElems = document.querySelectorAll('.brands__elem');
let screenWidth = document.documentElement.clientWidth;
let brandsExpDeploy = false;
let swiper = undefined;

brandsExp.addEventListener('click', deploybrands);
onresize = () => {
  screenWidth = document.documentElement.clientWidth
  addSwiper();
};

if (screenWidth < 768) {addSwiper();};

function deploybrands() {

  if (!brandsExpDeploy) {

    brandsList.classList.add('brands__list--expund');
    brandsExp.innerHTML =`
      <div  class="expunder__pic" 
            style="transform: rotate(180deg);">
      </div>
      Скрыть`;
    brandsExpDeploy = true;

  } else if (brandsExpDeploy) {

    brandsList.classList.remove('brands__list--expund');
    brandsExp.innerHTML = `
      <div class="expunder__pic"></div>
      Показать все`;
    brandsExpDeploy = false;
  };
};

function addSwiper () {

  if (screenWidth < 768 && swiper == undefined) {

    brands.classList.add('swiper');
    brandsList.classList.add('swiper-wrapper');
    brandsElems.forEach((elem) => {
      elem.parentElement.classList.add('swiper-slide');
    });
    swiper = new Swiper('.swiper', {

      slidesPerView: 'auto',
      spaceBetween: 16,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
    });

  } else if (screenWidth >= 768 && swiper != undefined) {

    location.reload();
    brands.classList.className = ('brands');
    brandsList.classList.className = ('brands__list');
    brandsElems.forEach((elem) => {
      elem.parentElement.className = ''
    });

    swiper = undefined;
    delete swiper;
    swiper.destroy();
  };
};