import beanLogo from "./resources/beans.png"

export default function header() {
  const content = document.querySelector("#content")

  const header = document.createElement("div")
  header.setAttribute("id", "header")
  content.appendChild(header)

  const nav = document.createElement("nav")
  nav.setAttribute("id", "nav")
  header.appendChild(nav)

  const logo = document.createElement("div")
  logo.setAttribute("id", "logo")
  nav.appendChild(logo)

  const img = document.createElement("img")
  img.src = beanLogo
  const h1 = document.createElement("h1")
  h1.innerText = "KO-HI"

  logo.append(img, h1)

  const ul = document.createElement("ul")
  nav.appendChild(ul)

  let li1 = document.createElement("li")
  li1.setAttribute("id", "home")
  li1.innerText = "HOME"

  let li2 = document.createElement("li")
  li2.setAttribute("id", "menu")
  li2.innerText = "MENU"

  let li3 = document.createElement("li")
  li3.setAttribute("id", "contact")
  li3.innerText = "CONTACT"


  ul.append(li1, li2, li3)

}