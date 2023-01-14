export default function home() {
  const content = document.querySelector("#content")

  const main = document.createElement("div")
  main.setAttribute("id", "main")

  content.appendChild(main)

  const mainWrapperLeft = document.createElement("div")
  mainWrapperLeft.setAttribute("id", "main-wrapper-left")

  main.appendChild(mainWrapperLeft)

  const backgroundCircle = document.createElement("div")
  backgroundCircle.setAttribute("id", "background-circle")

  const coffeePackImg = document.createElement("img")
  coffeePackImg.src = "../src/resources/coffee-pack.png"
  coffeePackImg.setAttribute("class", "coffee-pack-png")

  const coffeeMugImg = document.createElement("img")
  coffeeMugImg.src = "../src/resources/coffee-mug.png"
  coffeeMugImg.setAttribute("class", "coffee-mug-png")

  const textQuote = document.createElement("p")
  textQuote.innerText = '"Lorem ipsum dolor sit amet, consectetur adipisicing elit." -.Lorem'
  textQuote.setAttribute("class", "text-quote")

  mainWrapperLeft.append(backgroundCircle, coffeePackImg, coffeeMugImg, textQuote)

  const mainWrapperRight = document.createElement("div")
  mainWrapperRight.setAttribute("id", "main-wrapper-right")

  main.appendChild(mainWrapperRight)

  const h1 = document.createElement("h1")
  h1.innerText = "Welcome to KO-HI"

  const h2 = document.createElement("h2")
  h2.innerText = "Where all your Coffee needs are meet"

  const p1 = document.createElement("p")
  p1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores sit, dicta id consectetur odio accusantium pariatur possimus, harum consequuntur blanditiis sint, quia voluptatum inventore quasi soluta earum doloribus doloremque!"

  const p2 = document.createElement("p")
  p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum quasi iusto tenetur illum hic nulla! Nulla porro asperiores minus excepturi repudiandae enim nobis magnam, optio, tenetur dolorem illo nisi!"

  const btnLearnMore = document.createElement("button")
  btnLearnMore.setAttribute("class", "btn-learn-more")
  btnLearnMore.innerText = "LEARN MORE"

  mainWrapperRight.append(h1, h2, p1, p2, btnLearnMore)

}