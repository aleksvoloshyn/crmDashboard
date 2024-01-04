/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const activeMenu = __webpack_require__(/*! ./module/activeMenuItem.js */ \"./src/js/module/activeMenuItem.js\")\r\nconst searchCustomers = __webpack_require__(/*! ./module/searchCustomers.js */ \"./src/js/module/searchCustomers.js\")\r\nconst activeClass = __webpack_require__(/*! ./module/activeClass.js */ \"./src/js/module/activeClass.js\")\r\nconst showActiveInactive = __webpack_require__(/*! ./module/showActiveInactive.js */ \"./src/js/module/showActiveInactive.js\")\r\nconst pagination = __webpack_require__(/*! ./module/pagination.js */ \"./src/js/module/pagination.js\")\r\nconst mobileMenu = __webpack_require__(/*! ./module/mobileMenu.js */ \"./src/js/module/mobileMenu.js\")\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/activeClass.js":
/*!**************************************!*\
  !*** ./src/js/module/activeClass.js ***!
  \**************************************/
/***/ (function() {

eval("// show-hide matching users in list\r\n\r\nconst isActive = document.querySelectorAll('.customers__data-status--marked')\r\n\r\nisActive.forEach((element) => {\r\n  if (element.textContent.trim() === 'Active') {\r\n    element.classList.add('customers__data-status--active')\r\n  } else {\r\n    element.classList.add('customers__data-status--inactive')\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/activeClass.js?");

/***/ }),

/***/ "./src/js/module/activeMenuItem.js":
/*!*****************************************!*\
  !*** ./src/js/module/activeMenuItem.js ***!
  \*****************************************/
/***/ (function() {

eval("//select active menu item handler in NAVbar\r\n\r\nlet navigationItem = document.querySelectorAll('.navigation__item')\r\n\r\nnavigationItem.forEach(function (el) {\r\n  el.addEventListener('click', function () {\r\n    changeActive(this)\r\n  })\r\n})\r\n\r\nconst changeActive = (clickedElement) => {\r\n  let elements = document.querySelectorAll('.navigation__item')\r\n\r\n  elements.forEach(function (element) {\r\n    element.classList.remove('active')\r\n  })\r\n\r\n  clickedElement.classList.add('active')\r\n\r\n  // tab switcher:\r\n  let clickedEl = clickedElement.classList[1].split('__')[1]\r\n\r\n  let activeBoardEl = document.querySelectorAll(`.board .${clickedEl}`)\r\n\r\n  let parentElement = activeBoardEl[0].parentElement\r\n\r\n  let siblings = Array.from(parentElement.children)\r\n  siblings.forEach((sibling) => {\r\n    if (!sibling.classList.contains(clickedEl) && !sibling.matches('h2')) {\r\n      sibling.classList.add('hidden')\r\n    }\r\n  })\r\n\r\n  activeBoardEl.forEach((element) => {\r\n    element.classList.remove('hidden')\r\n    element.classList.add('boardActive')\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/activeMenuItem.js?");

/***/ }),

/***/ "./src/js/module/mobileMenu.js":
/*!*************************************!*\
  !*** ./src/js/module/mobileMenu.js ***!
  \*************************************/
/***/ (function() {

eval("// Получаем элементы меню и иконки\r\nconst menuIcon = document.getElementById('menuIcon')\r\nconst mobileMenu = document.getElementById('mobileMenu')\r\nconst boardContent = document.querySelector('.board')\r\nconst mobileMenuItem = document.querySelectorAll('.mobile-menu__item')\r\n\r\n// Обработчик клика по иконке меню\r\nmenuIcon.addEventListener('click', function () {\r\n  this.classList.toggle('activeItem')\r\n  mobileMenu.classList.toggle('activeItem')\r\n  boardContent.classList.toggle('hidden')\r\n})\r\n\r\n// Обработчик клика по пункту меню\r\nmobileMenu.addEventListener('click', function (e) {\r\n  if (e.target.tagName === 'A') {\r\n    menuIcon.classList.remove('activeItem')\r\n    mobileMenu.classList.remove('activeItem')\r\n    boardContent.classList.remove('hidden')\r\n  }\r\n})\r\n\r\n// select tab\r\nmobileMenuItem.forEach(function (el) {\r\n  el.addEventListener('click', function () {\r\n    changeActiveTab(this)\r\n  })\r\n})\r\n\r\nconst changeActiveTab = (clicked) => {\r\n  let clickedEl = clicked.classList[1].split('__')[1]\r\n  let activeBoardEl = document.querySelectorAll(`.board .${clickedEl}`)\r\n\r\n  let parentElement = activeBoardEl[0].parentElement\r\n\r\n  let siblings = Array.from(parentElement.children)\r\n  siblings.forEach((sibling) => {\r\n    if (!sibling.classList.contains(clickedEl) && !sibling.matches('h2')) {\r\n      sibling.classList.add('hidden')\r\n    }\r\n  })\r\n\r\n  activeBoardEl.forEach((element) => {\r\n    element.classList.remove('hidden')\r\n    element.classList.add('boardActive')\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/mobileMenu.js?");

/***/ }),

/***/ "./src/js/module/pagination.js":
/*!*************************************!*\
  !*** ./src/js/module/pagination.js ***!
  \*************************************/
/***/ (function() {

eval("//paginator handler\r\nconst paginationItem = document.querySelectorAll('.customers__footer-item ')\r\n\r\nconst prevButton = document.querySelector('.previous ')\r\nconst nextButton = document.querySelector('.next ')\r\n\r\nconst paginationHandler = () => {\r\n  paginationItem.forEach((item) => {\r\n    item.addEventListener('click', function () {\r\n      const activePage = document.querySelector(\r\n        '.customers__footer-item--active'\r\n      )\r\n\r\n      if (\r\n        this.innerText !== '<' &&\r\n        this.innerText !== '...' &&\r\n        this.innerText !== '>'\r\n      ) {\r\n        activePage.classList.remove('customers__footer-item--active')\r\n        this.classList.add('customers__footer-item--active')\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\npaginationHandler()\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/pagination.js?");

/***/ }),

/***/ "./src/js/module/searchCustomers.js":
/*!******************************************!*\
  !*** ./src/js/module/searchCustomers.js ***!
  \******************************************/
/***/ (function() {

eval("// search user by typing his name\r\n\r\nconst searchInput = document.querySelector('.search-input')\r\nconst dataList = document.querySelector('.customers__data-list')\r\n\r\nsearchInput.addEventListener('input', function () {\r\n  const searchTerm = searchInput.value.toLowerCase()\r\n\r\n  const items = dataList.querySelectorAll('.customers__data-item')\r\n\r\n  items.forEach(function (item) {\r\n    const itemName = item\r\n      .querySelector('.customers__data-name')\r\n      .textContent.toLowerCase()\r\n\r\n    if (itemName.includes(searchTerm)) {\r\n      item.style.display = 'flex'\r\n    } else {\r\n      item.style.display = 'none'\r\n    }\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/searchCustomers.js?");

/***/ }),

/***/ "./src/js/module/showActiveInactive.js":
/*!*********************************************!*\
  !*** ./src/js/module/showActiveInactive.js ***!
  \*********************************************/
/***/ (function() {

eval("// handlers for clicking on \"All Customers\" or \"Active Meьbers\" to show matching entries\r\n\r\nconst activeMembersText = document.querySelector('.customers__header-text')\r\nconst allMembersText = document.querySelector('.customers__header-title')\r\n\r\nconst activeCustomers = document.querySelectorAll(\r\n  '.customers__data-list .item .customers__data-status--active'\r\n)\r\nconst inAactiveCustomers = document.querySelectorAll(\r\n  '.customers__data-list .item .customers__data-status--inactive'\r\n)\r\n\r\nconst showActiveCustomers = () => {\r\n  inAactiveCustomers.forEach((el) => {\r\n    el.parentNode.style.display = 'none'\r\n  })\r\n}\r\nconst showAllCustomers = () => {\r\n  inAactiveCustomers.forEach((el) => {\r\n    el.parentNode.style.display = 'flex'\r\n  })\r\n}\r\n\r\nactiveMembersText.addEventListener('click', () => {\r\n  showActiveCustomers()\r\n})\r\nallMembersText.addEventListener('click', () => {\r\n  showAllCustomers()\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/showActiveInactive.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;