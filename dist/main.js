/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-footer.js":
/*!*******************************!*\
  !*** ./src/contact-footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n\n  const content = document.querySelector(\"#content\")\n\n  const footer = document.createElement(\"div\")\n  footer.setAttribute(\"id\", \"footer\")\n\n  content.appendChild(footer)\n\n  const footerContent = document.createElement(\"div\")\n  footerContent.setAttribute(\"id\", \"footer-content\")\n\n  footer.appendChild(footerContent)\n\n  function creditLeft() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.innerText = \"Rosina Gavrilash\"\n    a2.innerText = \"Ouch!\"\n    a1.setAttribute(\"target\", \"_blank\")\n    a1.href = \"https://icons8.com/illustrations/author/HxMFjfKZdNq2\"\n    a2.setAttribute(\"target\", \"_blank\")\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p2.innerText = \"from  \"\n    p1.innerText = \"Illustration by \"\n    p1.setAttribute(\"class\", \"first-p\")\n    // Illustration by Rosina Gavrilash from Ouch!\n    // Illustration by <a href=\"https://icons8.com/illustrations/author/HxMFjfKZdNq2\">Rosina Gavrilash</a> from <a href=\"https://icons8.com/illustrations\">Ouch!</a>\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n\n  }\n  creditLeft()\n\n  function creditRight() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.setAttribute(\"target\", \"_blank\")\n    a2.setAttribute(\"target\", \"_blank\")\n    a1.innerText = \"Icons8\"\n    a2.innerText = \"Ouch!\"\n    a1.href = \"https://icons8.com/illustrations/author/zD2oqC8lLBBA\"\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p1.innerText = \"Illustration by \"\n    p2.innerText = \"from \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n\n  creditRight()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-footer.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\nconst content = document.querySelector(\"#content\")\n\n  const contactContent = document.createElement(\"div\")\n  contactContent.setAttribute(\"id\", \"contact-content\")\n\n  content.appendChild(contactContent)\n\n\n  let div1 = document.createElement(\"div\")\n  let div2 = document.createElement(\"div\")\n  let div3 = document.createElement(\"div\")\n  let div4 = document.createElement(\"div\")\n\n  let img1 = document.createElement(\"img\")\n  img1.src = \"../resources/contact.png\"\n\n  let img2 = document.createElement(\"img\")\n  img2.src = \"../resources/group.png\"\n\n  contactContent.append(div1, div2, div3, div4)\n\n  div1.appendChild(img1)\n  div3.appendChild(img2)\n\n  \n  const title1 = document.createElement(\"h1\")\n  title1.innerText = \"Contact Us\"\n  \n\n  let p2 = document.createElement(\"p\")\n  p2.innerText = \"Buenos Aires, FakeStreet123.  Phone: 123-1234-1234\"\n  let p3 = document.createElement(\"p\")\n  p3.innerText = \"Medellín, FakeStreet123.  Phone: 123-1234-1234\"\n  let p4 = document.createElement(\"p\")\n  p4.innerText = \"Mexico D. F, FakeStreet123.  Phone: 123-1234-1234\" \n  let p5 = document.createElement(\"p\")\n  p5.innerText = \"Tokyo, FakeStreet123.  Phone: 123-1234-1234\" \n  let p6 = document.createElement(\"p\")\n  p6.innerText = \"New York, FakeStreet123.  Phone: 123-1234-1234\"\n  \n  div2.append(title1, p2, p3, p4, p5, p6)\n\n\n\n  const title2 = document.createElement(\"h2\")\n  title2.innerText = \"About Us\"\n\n  let p7 = document.createElement(\"p\")\n  p7.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus \"\n\n  let p8 = document.createElement(\"p\")\n  p8.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus \"\n\n  div4.append(title2, p7, p8)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n\n  const content = document.querySelector(\"#content\")\n\n  const footer = document.createElement(\"div\")\n  footer.setAttribute(\"id\", \"footer\")\n\n  content.appendChild(footer)\n\n  const footerContent = document.createElement(\"div\")\n  footerContent.setAttribute(\"id\", \"footer-content\")\n\n  footer.appendChild(footerContent)\n\n  function creditLeft() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.innerText = \"Coffee Beans\"\n    a2.innerText = \"Icons8\"\n    a1.setAttribute(\"target\", \"_blank\")\n    a1.href = \"https://icons8.com/icon/0_t1ieKC4IKc/coffee-beans\"\n    a2.setAttribute(\"target\", \"_blank\")\n    a2.href = \"https://icons8.com\"\n\n    p2.innerText = \" icons by \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n  creditLeft()\n\n  function creditRight() {\n    const p1 = document.createElement(\"p\")\n    const p2 = document.createElement(\"p\")\n    const a1 = document.createElement(\"a\")\n    const a2 = document.createElement(\"a\")\n\n    a1.setAttribute(\"target\", \"_blank\")\n    a2.setAttribute(\"target\", \"_blank\")\n    a1.innerText = \"Icons8\"\n    a2.innerText = \"Ouch!\"\n    a1.href = \"https://icons8.com/illustrations/author/zD2oqC8lLBBA\"\n    a2.href = \"https://icons8.com/illustrations\"\n\n    p1.innerText = \"Illustration by \"\n    p2.innerText = \"from \"\n\n    footerContent.append(p1)\n    p1.append(a1, p2, a2)\n\n  }\n\n  creditRight()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n  const content = document.querySelector(\"#content\")\n\n  const header = document.createElement(\"div\")\n  header.setAttribute(\"id\", \"header\")\n  content.appendChild(header)\n\n  const nav = document.createElement(\"nav\")\n  nav.setAttribute(\"id\", \"nav\")\n  header.appendChild(nav)\n\n  const logo = document.createElement(\"div\")\n  logo.setAttribute(\"id\", \"logo\")\n  nav.appendChild(logo)\n\n  const img = document.createElement(\"img\")\n  img.src = \"../resources/beans.png\"\n  const h1 = document.createElement(\"h1\")\n  h1.innerText = \"KO-HI\"\n\n  logo.append(img, h1)\n\n  const ul = document.createElement(\"ul\")\n  nav.appendChild(ul)\n\n  let li1 = document.createElement(\"li\")\n  li1.setAttribute(\"id\", \"home\")\n  li1.innerText = \"HOME\"\n\n  let li2 = document.createElement(\"li\")\n  li2.setAttribute(\"id\", \"menu\")\n  li2.innerText = \"MENU\"\n\n  let li3 = document.createElement(\"li\")\n  li3.setAttribute(\"id\", \"contact\")\n  li3.innerText = \"CONTACT\"\n\n\n  ul.append(li1, li2, li3)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\n  const content = document.querySelector(\"#content\")\n\n  const main = document.createElement(\"div\")\n  main.setAttribute(\"id\", \"main\")\n\n  content.appendChild(main)\n\n  const mainWrapperLeft = document.createElement(\"div\")\n  mainWrapperLeft.setAttribute(\"id\", \"main-wrapper-left\")\n\n  main.appendChild(mainWrapperLeft)\n\n  const backgroundCircle = document.createElement(\"div\")\n  backgroundCircle.setAttribute(\"id\", \"background-circle\")\n\n  const coffeePackImg = document.createElement(\"img\")\n  coffeePackImg.src = \"../resources/coffee-pack.png\"\n  coffeePackImg.setAttribute(\"class\", \"coffee-pack-png\")\n\n  const coffeeMugImg = document.createElement(\"img\")\n  coffeeMugImg.src = \"../resources/coffee-mug.png\"\n  coffeeMugImg.setAttribute(\"class\", \"coffee-mug-png\")\n\n  const textQuote = document.createElement(\"p\")\n  textQuote.innerText = '\"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\" -.Lorem'\n  textQuote.setAttribute(\"class\", \"text-quote\")\n\n  mainWrapperLeft.append(backgroundCircle, coffeePackImg, coffeeMugImg, textQuote)\n\n  const mainWrapperRight = document.createElement(\"div\")\n  mainWrapperRight.setAttribute(\"id\", \"main-wrapper-right\")\n\n  main.appendChild(mainWrapperRight)\n\n  const h1 = document.createElement(\"h1\")\n  h1.innerText = \"Welcome to KO-HI\"\n\n  const h2 = document.createElement(\"h2\")\n  h2.innerText = \"Where all your Coffee needs are meet\"\n\n  const p1 = document.createElement(\"p\")\n  p1.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores sit, dicta id consectetur odio accusantium pariatur possimus, harum consequuntur blanditiis sint, quia voluptatum inventore quasi soluta earum doloribus doloremque!\"\n\n  const p2 = document.createElement(\"p\")\n  p2.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum quasi iusto tenetur illum hic nulla! Nulla porro asperiores minus excepturi repudiandae enim nobis magnam, optio, tenetur dolorem illo nisi!\"\n\n  const btnLearnMore = document.createElement(\"button\")\n  btnLearnMore.setAttribute(\"class\", \"btn-learn-more\")\n  btnLearnMore.innerText = \"LEARN MORE\"\n\n  mainWrapperRight.append(h1, h2, p1, p2, btnLearnMore)\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _contact_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-footer.js */ \"./src/contact-footer.js\");\n\n\n\n\n\n\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\nlet currentPage = \"main\"\n\nfunction addEvents() {\n  const homeBtn = document.querySelector(\"#home\")\n  const menuBtn = document.querySelector(\"#menu\")\n  const contactBtn = document.querySelector(\"#contact\")\n\n  homeBtn.addEventListener(\"click\", renderHome)\n\n  menuBtn.addEventListener(\"click\", renderMenu)\n\n  contactBtn.addEventListener(\"click\", renderContact)\n\n}\n\n  addEvents()\n\n\nfunction renderHome() {\n\n  if(currentPage == \"main\") {\n    return\n  }\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  ;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n  addEvents()\n\n  currentPage = \"main\"\n\n}\n\n function renderMenu() {\n\n  if(currentPage == \"menu\") {\n    return\n  }\n\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  ;(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n  addEvents()\n\n  currentPage = \"menu\"\n\n\n} \nfunction renderContact() {\n\n  if(currentPage == \"contact\") {\n    return\n  }\n\n  clearPage()\n\n  ;(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n  ;(0,_contact_footer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n  addEvents()\n\n  currentPage = \"contact\"\n\n\n}\n\n\nfunction clearPage() {\n\n  let content = document.querySelector(\"#content\")\n  \n  content.replaceChildren()\n  \n  \n}\n\n// let body = document.querySelector(\"body\")\n\n// let header = document.querySelector(\"#header\")\n// let main = document.querySelector(\"#main\")\n// let menuContent = document.querySelector(\"#menu-content\")\n// let contactContent = document.querySelector(\"#contact-content\")\n// let footer = document.querySelector(\"#footer\")\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const content = document.querySelector(\"#content\")\n\n  const menuContent = document.createElement(\"div\")\n  menuContent.setAttribute(\"id\", \"menu-content\")\n\n  content.appendChild(menuContent)\n\n\n  let div1 = document.createElement(\"div\")\n  let div2 = document.createElement(\"div\")\n  let div3 = document.createElement(\"div\")\n  let div4 = document.createElement(\"div\")\n  let div5 = document.createElement(\"div\")\n  let div6 = document.createElement(\"div\")\n  let div7 = document.createElement(\"div\")\n  let div8 = document.createElement(\"div\")\n  let div9 = document.createElement(\"div\")\n  let div10 = document.createElement(\"div\")\n  let div11 = document.createElement(\"div\")\n  let div12 = document.createElement(\"div\")\n\n  let img1 = document.createElement(\"img\")\n  let img2 = document.createElement(\"img\")\n  let img3 = document.createElement(\"img\")\n  let img4 = document.createElement(\"img\")\n  let img5 = document.createElement(\"img\")\n  let img6 = document.createElement(\"img\")\n\n  menuContent.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12)\n\n  img1.src = \"../resources/coffee.png\"\n  img2.src = \"../resources/pancake.png\"\n  img3.src = \"../resources/donut.png\"\n  img4.src = \"../resources/cake.png\"\n  img5.src = \"../resources/chocolate.png\"\n  img6.src = \"../resources/roasted-coffee.png\"\n\n  div1.appendChild(img1)\n  div3.appendChild(img2)\n  div5.appendChild(img3)\n  div7.appendChild(img4)\n  div9.appendChild(img5)\n  div11.appendChild(img6)\n\n\n  let title1 = document.createElement(\"h1\")\n  let title2 = document.createElement(\"h2\")\n  let title3 = document.createElement(\"h2\")\n  let title4 = document.createElement(\"h2\")\n  let title5 = document.createElement(\"h2\")\n  let title6 = document.createElement(\"h2\")\n\n\n  let p1 = document.createElement(\"p\")\n  let p2 = document.createElement(\"p\")\n  let p3 = document.createElement(\"p\")\n  let p4 = document.createElement(\"p\")\n  let p5 = document.createElement(\"p\")\n  let p6 = document.createElement(\"p\")\n\n\n\n\n  title1.innerText = \"HOUSE COFFEE\"\n  title2.innerText = \"PANCAKES\"\n  title3.innerText = \"DONUTS\"\n  title4.innerText = \"CAKES\"\n  title5.innerText = \"CHOCOLATE\"\n  title6.innerText = \"ROASTED COFFEE\"\n\n  div2.append(title1, p1)\n  div4.append(title2, p2)\n  div6.append(title3, p3)\n  div8.append(title4, p4)\n  div10.append(title5, p5)\n  div12.append(title6, p6)\n\n  function fillParagraphs() {\n    const p = document.querySelectorAll(\"p\")\n\n    for (let i = 0; i < p.length; i++) {\n      p[i].innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus\"\n\n\n    }\n  }\n  fillParagraphs()\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;