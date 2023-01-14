export default function contact() {
const content = document.querySelector("#content")

  const contactContent = document.createElement("div")
  contactContent.setAttribute("id", "contact-content")

  content.appendChild(contactContent)


  let div1 = document.createElement("div")
  let div2 = document.createElement("div")
  let div3 = document.createElement("div")
  let div4 = document.createElement("div")

  let img1 = document.createElement("img")
  img1.src = "../src/resources/contact.png"

  let img2 = document.createElement("img")
  img2.src = "../src/resources/group.png"

  contactContent.append(div1, div2, div3, div4)

  div1.appendChild(img1)
  div3.appendChild(img2)

  
  const title1 = document.createElement("h1")
  title1.innerText = "Contact Us"
  

  let p2 = document.createElement("p")
  p2.innerText = "Buenos Aires, FakeStreet123.  Phone: 123-1234-1234"
  let p3 = document.createElement("p")
  p3.innerText = "Medellín, FakeStreet123.  Phone: 123-1234-1234"
  let p4 = document.createElement("p")
  p4.innerText = "Mexico D. F, FakeStreet123.  Phone: 123-1234-1234" 
  let p5 = document.createElement("p")
  p5.innerText = "Tokyo, FakeStreet123.  Phone: 123-1234-1234" 
  let p6 = document.createElement("p")
  p6.innerText = "New York, FakeStreet123.  Phone: 123-1234-1234"
  
  div2.append(title1, p2, p3, p4, p5, p6)



  const title2 = document.createElement("h2")
  title2.innerText = "About Us"

  let p7 = document.createElement("p")
  p7.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus "

  let p8 = document.createElement("p")
  p8.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quia ipsum nemo? Labore earum iusto facere? Explicabo eum, quaerat, ducimus tenetur dolore voluptatibus reprehenderit at commodi, similique tempora delectus "

  div4.append(title2, p7, p8)

}