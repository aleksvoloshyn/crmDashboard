// handlers for clicking on "All Customers" or "Active Meьbers" to show matching entries

const activeMembersText = document.querySelector('.customers__header-text')
const allMembersText = document.querySelector('.customers__header-title')

const activeCustomers = document.querySelectorAll(
  '.customers__data-list .item .customers__data-status--active'
)
const inAactiveCustomers = document.querySelectorAll(
  '.customers__data-list .item .customers__data-status--inactive'
)

const showActiveCustomers = () => {
  inAactiveCustomers.forEach((el) => {
    el.parentNode.style.display = 'none'
  })
}
const showAllCustomers = () => {
  inAactiveCustomers.forEach((el) => {
    el.parentNode.style.display = 'flex'
  })
}

activeMembersText.addEventListener('click', () => {
  showActiveCustomers()
})
allMembersText.addEventListener('click', () => {
  showAllCustomers()
})
