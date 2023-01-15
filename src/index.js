import header from "./header"
import home from "./home"
import menu from "./menu"
import contact from "./contact"
import footer from "./footer"
import contactFooter from "./contact-footer.js"
import "./style.css"

header()
home()
footer()

let currentPage = "main"

function addEvents() {
  const homeBtn = document.querySelector("#home")
  const menuBtn = document.querySelector("#menu")
  const contactBtn = document.querySelector("#contact")

  homeBtn.addEventListener("click", renderHome)

  menuBtn.addEventListener("click", renderMenu)

  contactBtn.addEventListener("click", renderContact)

}

  addEvents()


function renderHome() {

  if(currentPage == "main") {
    return
  }

  clearPage()

  header()
  home()
  footer()
  addEvents()

  currentPage = "main"

}

 function renderMenu() {

  if(currentPage == "menu") {
    return
  }


  clearPage()

  header()
  menu()
  footer()
  addEvents()

  currentPage = "menu"


} 
function renderContact() {

  if(currentPage == "contact") {
    return
  }

  clearPage()

  header()
  contact()
  contactFooter()
  addEvents()

  currentPage = "contact"


}


function clearPage() {

  let content = document.querySelector("#content")
  
  content.replaceChildren()
  
  
}

// let body = document.querySelector("body")

// let header = document.querySelector("#header")
// let main = document.querySelector("#main")
// let menuContent = document.querySelector("#menu-content")
// let contactContent = document.querySelector("#contact-content")
// let footer = document.querySelector("#footer")