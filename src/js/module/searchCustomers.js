// search user by typing his name

const searchInput = document.querySelector('.search-input')
const dataList = document.querySelector('.customers__data-list')

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase()

  const items = dataList.querySelectorAll('.customers__data-item')

  items.forEach(function (item) {
    const itemName = item
      .querySelector('.customers__data-name')
      .textContent.toLowerCase()

    if (itemName.includes(searchTerm)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
})
