export default function footer() {

  const content = document.querySelector("#content")

  const footer = document.createElement("div")
  footer.setAttribute("id", "footer")

  content.appendChild(footer)

  const footerContent = document.createElement("div")
  footerContent.setAttribute("id", "footer-content")

  footer.appendChild(footerContent)

  function creditLeft() {
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const a1 = document.createElement("a")
    const a2 = document.createElement("a")

    a1.innerText = "Coffee Beans"
    a2.innerText = "Icons8"
    a1.setAttribute("target", "_blank")
    a1.href = "https://icons8.com/icon/0_t1ieKC4IKc/coffee-beans"
    a2.setAttribute("target", "_blank")
    a2.href = "https://icons8.com"

    p2.innerText = " icons by "

    footerContent.append(p1)
    p1.append(a1, p2, a2)

  }
  creditLeft()

  function creditRight() {
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const a1 = document.createElement("a")
    const a2 = document.createElement("a")

    a1.setAttribute("target", "_blank")
    a2.setAttribute("target", "_blank")
    a1.innerText = "Icons8"
    a2.innerText = "Ouch!"
    a1.href = "https://icons8.com/illustrations/author/zD2oqC8lLBBA"
    a2.href = "https://icons8.com/illustrations"

    p1.innerText = "Illustration by "
    p2.innerText = "from "

    footerContent.append(p1)
    p1.append(a1, p2, a2)

  }

  creditRight()

}