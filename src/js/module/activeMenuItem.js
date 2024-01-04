//select active menu item handler in NAVbar

let navigationItem = document.querySelectorAll('.navigation__item')

navigationItem.forEach(function (el) {
  el.addEventListener('click', function () {
    changeActive(this)
  })
})

const changeActive = (clickedElement) => {
  let elements = document.querySelectorAll('.navigation__item')

  elements.forEach(function (element) {
    element.classList.remove('active')
  })

  clickedElement.classList.add('active')

  // tab switcher:
  let clickedEl = clickedElement.classList[1].split('__')[1]

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
