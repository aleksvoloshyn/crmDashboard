//paginator handler
const paginationItem = document.querySelectorAll('.customers__footer-item ')

const prevButton = document.querySelector('.previous ')
const nextButton = document.querySelector('.next ')

const paginationHandler = () => {
  paginationItem.forEach((item) => {
    item.addEventListener('click', function () {
      const activePage = document.querySelector(
        '.customers__footer-item--active'
      )

      if (
        this.innerText !== '<' &&
        this.innerText !== '...' &&
        this.innerText !== '>'
      ) {
        activePage.classList.remove('customers__footer-item--active')
        this.classList.add('customers__footer-item--active')
      }
    })
  })
}

paginationHandler()
