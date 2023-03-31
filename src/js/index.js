import '../scss/style.scss'
import Swiper from 'swiper'
import 'swiper/swiper.scss'
console.log('Works!')

// swipers
new Swiper('.brands-swiper', {
  pagination: {
    el: '.brands-swiper__pagination',
    clickable: true,
    type: 'bullets'
  },
  slidesPerView: 1.2,
  spaceBetween: 16
})

new Swiper('.tech-repair__swiper', {
  pagination: {
    el: '.tech-repair__swiper-pagination',
    clickable: true
  },
  slidesPerView: 1.2,
  spaceBetween: 16
})

new Swiper('.prices__swiper', {
  pagination: {
    el: '.prices__swiper-pagination',
    clickable: true
  },
  slidesPerView: 1.1,
  spaceBetween: 16
})
// feedback sidebar
const feedbackSidebar = document.querySelector('.feedback-sidebar')

// open sidebar button
const sidebar = document.querySelector('.sidebar')
const openButton = document.querySelector('.burger-menu')
const closeButton = document.querySelector('.close-menu-btn')
const body = document.body

function hideSidebarAndOverlayOnVoidClick(e) {
  if (e.target.classList.contains('overlay')) {
    sidebar.classList.remove('sidebar--visible')
    feedbackSidebar.classList.remove('feedback-sidebar--visible')

    body.classList.remove('overlay')
    sidebar.style.zIndex = 1
  }
}

openButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar--visible')
  body.classList.add('overlay')
  body.addEventListener('click', hideSidebarAndOverlayOnVoidClick, true)
})
closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--visible')
  body.classList.remove('overlay')
  body.removeEventListener('click', hideSidebarAndOverlayOnVoidClick, true)
})

// "show more" logic for brand repair block

const showMoreBrandsButton = document.querySelector('.brands-repair__more-btn')
const hiddenBrands = document.querySelectorAll(
  '.brands-repair__item--hidden-on-tablet'
)

showMoreBrandsButton.addEventListener('click', function () {
  const buttonText = this.children[1]
  if (buttonText.textContent.includes('Показать')) {
    buttonText.textContent = 'Скрыть'
  } else {
    buttonText.textContent = 'Показать'
  }
  hiddenBrands.forEach((el) => {
    el.classList.toggle('brands-repair__item--visible')
  })
})

// "show more" logic for tech repair block
const showMoreTechButton = document.querySelector('.tech-repair__more-btn')
const hiddenTech = document.querySelectorAll(
  '.tech-repair__item--hidden-on-tablet'
)

showMoreTechButton.addEventListener('click', function () {
  const buttonText = this.children[1]
  if (buttonText.textContent.includes('Показать')) {
    buttonText.textContent = 'Скрыть'
  } else {
    buttonText.textContent = 'Показать'
  }
  hiddenTech.forEach((el) => {
    el.classList.toggle('tech-repair__item--visible')
  })
})

// open/close feedback sidebar
const openFeedbackSidebarButton = document.querySelectorAll(
  '.feedback-sidebar-open-btn'
)
const closeFeedbackSidebarButton = document.querySelector(
  '.close-feedback-sidebar-menu'
)
openFeedbackSidebarButton.forEach((el) => {
  el.addEventListener('click', () => {
    sidebar.style.zIndex = 0
    feedbackSidebar.classList.add('feedback-sidebar--visible')
    body.classList.add('overlay')
    body.addEventListener('click', hideSidebarAndOverlayOnVoidClick, true)
  })
})
closeFeedbackSidebarButton.addEventListener('click', () => {
  feedbackSidebar.classList.remove('feedback-sidebar--visible')
  body.classList.remove('overlay')
  sidebar.style.zIndex = 1
  body.removeEventListener('click', hideSidebarAndOverlayOnVoidClick, true)
})
