import coffee        from "./resources/coffee.png"
import pancake   from "./resources/pancake.png"
import donut from "./resources/donut.png"
import cake from "./resources/cake.png"
import chocolate from "./resources/chocolate.png"
import roasted from "./resources/roasted-coffee.png"


export default function menu() {
  const content = document.querySelector("#content")

  const menuContent = document.createElement("div")
  menuContent.setAttribute("id", "menu-content")

  content.appendChild(menuContent)


  let div1 = document.createElement("div")
  let div2 = document.createElement("div")
  let div3 = document.createElement("div")
  let div4 = document.createElement("div")
  let div5 = document.createElement("div")
  let div6 = document.createElement("div")
  let div7 = document.createElement("div")
  let div8 = document.createElement("div")
  let div9 = document.createElement("div")
  let div10 = document.createElement("div")
  let div11 = document.createElement("div")
  let div12 = document.createElement("div")

  let img1 = document.createElement("img")
  let img2 = document.createElement("img")
  let img3 = document.createElement("img")
  let img4 = document.createElement("img")
  let img5 = document.createElement("img")
  let img6 = document.createElement("img")

  menuContent.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12)

  img1.src = coffee
  img2.src = pancake
  img3.src = donut
  img4.src = cake
  img5.src = chocolate
  img6.src = roasted

  div1.appendChild(img1)
  div3.appendChild(img2)
  div5.appendChild(img3)
  div7.appendChild(img4)
  div9.appendChild(img5)
  div11.appendChild(img6)


  let title1 = document.createElement("h1")
  let title2 = document.createElement("h2")
  let title3 = document.createElement("h2")
  let title4 = document.createElement("h2")
  let title5 = document.createElement("h2")
  let title6 = document.createElement("h2")


  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  let p3 = document.createElement("p")
  let p4 = document.createElement("p")
  let p5 = document.createElement("p")
  let p6 = document.createElement("p")




  title1.innerText = "HOUSE COFFEE"
  title2.innerText = "PANCAKES"
  title3.innerText = "DONUTS"
  title4.innerText = "CAKES"
  title5.innerText = "CHOCOLATE"
  title6.innerText = "ROASTED COFFEE"

  div2.append(title1, p1)
  div4.append(title2, p2)
  div6.append(title3, p3)
  div8.append(title4, p4)
  div10.append(title5, p5)
  div12.append(title6, p6)

  function fillParagraphs() {
    const p = document.querySelectorAll("p")

    for (let i = 0; i < p.length; i++) {
      p[i].innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus"


    }
  }
  fillParagraphs()

}