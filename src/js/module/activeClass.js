// show-hide matching users in list

const isActive = document.querySelectorAll('.customers__data-status--marked')

isActive.forEach((element) => {
  if (element.textContent.trim() === 'Active') {
    element.classList.add('customers__data-status--active')
  } else {
    element.classList.add('customers__data-status--inactive')
  }
})
