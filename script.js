let brandsExp = document.querySelector('.brands__expunder')
let brandsList = document.querySelector('.brands__list')
let brandsExpPic = document.querySelector('.expunder__pic')
var brandsExpDeploy = false

brandsExp.addEventListener('click', deploybrands)

function deploybrands() {
  if (!brandsExpDeploy) {
    brandsList.classList.add('brands__list--expund')
    brandsExp.innerHTML = 
    '<div class="expunder__pic" style="transform: rotate(180deg);"></div>Скрыть'
    brandsExpDeploy = true
  } else if (brandsExpDeploy) {
    brandsList.classList.remove('brands__list--expund')
    brandsExpPic.style.removeProperty('transform')
    brandsExp.innerHTML = '<div class="expunder__pic"></div>Показать все'
    brandsExpDeploy = false
  }
}