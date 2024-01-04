// Получаем элементы меню и иконки
const menuIcon = document.getElementById('menuIcon')
const mobileMenu = document.getElementById('mobileMenu')
const boardContent = document.querySelector('.board')
const mobileMenuItem = document.querySelectorAll('.mobile-menu__item')

// Обработчик клика по иконке меню
menuIcon.addEventListener('click', function () {
  this.classList.toggle('activeItem')
  mobileMenu.classList.toggle('activeItem')
  boardContent.classList.toggle('hidden')
})

// Обработчик клика по пункту меню
mobileMenu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menuIcon.classList.remove('activeItem')
    mobileMenu.classList.remove('activeItem')
    boardContent.classList.remove('hidden')
  }
})

// select tab
mobileMenuItem.forEach(function (el) {
  el.addEventListener('click', function () {
    changeActiveTab(this)
  })
})

const changeActiveTab = (clicked) => {
  let clickedEl = clicked.classList[1].split('__')[1]
  let activeBoardEl = document.querySelectorAll(`.board .${clickedEl}`)

  let parentElement = activeBoardEl[0].parentElement

  let siblings = Array.from(parentElement.children)
  siblings.forEach((sibling) => {
    if (!sibling.classList.contains(clickedEl) && !sibling.matches('h2')) {
      sibling.classList.add('hidden')
    }
  })

  activeBoardEl.forEach((element) => {
    element.classList.remove('hidden')
    element.classList.add('boardActive')
  })
}
