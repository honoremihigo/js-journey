//here we are going to put our desserts data in an array of objects containing the name, price and image of the dessert
let id = 10;
const desserts = [
  {
    id: 1,
    name: "waffle",
    price: 6.50,
    des: "Waffle with berries",
    image: "./img/image-waffle-desktop.jpg"
  },
  {
    id: 2,
    name: "creme-brulee",
    price: 7.00,
    des: "Vanilla Bean Crème Brûlée",
    image: "./img/image-creme-brulee-desktop.jpg"
  },
  {
    id: 3,
    name: "macaron",
    price: 8.00,
    des: "Macaron Mix of Five",
    image: "./img/image-macaron-desktop.jpg"
  },
  {
    id: 4,
    name: "tiramisu",
    price: 5.50,
    des: "Classic Tiramisu",
    image: "./img/image-tiramisu-desktop.jpg"
  },
  {
    id: 5,
    name: "baklava",
    price: 4.00,
    des: "Pistachio Baklava",
    image: "./img/image-baklava-desktop.jpg"
  },
  {
    id: 6,
    name: "lemon-pie",
    price: 5.00,
    des: "Lemon Meringue Pie",
    image: "./img/image-meringue-desktop.jpg"
  },
  {
    id: 7,
    name: "red-velvet",
    price: 4.50,
    des: "Red Velvet Cake",
    image: "./img/image-cake-desktop.jpg"
  },
  {
    id: 8,
    name: "brownie",
    price: 5.50,
    des: "Salted Caramel Brownie",
    image: "./img/image-brownie-desktop.jpg"
  },
  {
    id: 9,
    name: "panna-cotta",
    price: 6.50,
    des: "Vanilla Panna Cotta",
    image: "./img/image-panna-cotta-desktop.jpg"
  }
];
// after creating the array we loop through them and then display them in our page using the dom
const dessertsCont = document.querySelector(".desert-container")
const cartCont = document.querySelector(".cart-cont")
dessertsCont.innerHTML = ""


const renderDesserts = (dessert) => {
    const desertCard = document.createElement("div")
    desertCard.className = "desert"

    const dessertImg = document.createElement("img")
    dessertImg.src = dessert.image
    dessertImg.alt = dessert.name
    desertCard.appendChild(dessertImg)

    const addToCartBtn = document.createElement("div")
    addToCartBtn.className = "add-to-cart-btn"

    const addToCartIcon = document.createElement("img")
    addToCartIcon.src = "./img/icon-add-to-cart.svg"
    addToCartBtn.appendChild(addToCartIcon)

    const addToCartText = document.createElement("p")
    addToCartText.textContent = "Add to Cart"
    addToCartBtn.appendChild(addToCartText)

    desertCard.appendChild(addToCartBtn)

    const desertInfo = document.createElement("div")
    desertInfo.className = "desert-info"
    const desertName = document.createElement("p")
    desertName.textContent = dessert.name
    desertInfo.appendChild(desertName)

    const desertDes = document.createElement("h4")
    desertDes.textContent = dessert.des
    desertInfo.appendChild(desertDes)

    const desertPrice = document.createElement("h4")
    desertPrice.className = "price"
    desertPrice.textContent = `$${dessert.price.toFixed(2)}`
    desertInfo.appendChild(desertPrice)
    desertCard.appendChild(desertInfo)

    dessertsCont.appendChild(desertCard)
}
// and we create a function for adding a new desert in our array

const addDesert = (name, price, des, image) => {
    const newDesert = {
        id: id++,  // Increment id before assigning
        name: name,
        price: price,
        des: des,
        image: image
    }
    desserts.push(newDesert);
    console.log(newDesert);
    // No need for id++ here anymore
}

//and the function for deleting a desert from our array
const deleteDessert = (id) => {
    const index = desserts.findIndex(dess => dess.id === id)
    if (index !== -1) {
        desserts.splice(index, 1)
    }
}
// we also create a function for updating the price of a desert in our array
//and we create function for adding the desert to cart
const cart = []

const addTocart = (id, quantity) => {
    const index = desserts.findIndex(dess => dess.id === id)
    if( index !== -1){
        const desert = deserts[index]
        const cartItem = {
            id: id++,
            name: desert.des,
            quantity: quantity,
            unitPrice: desert.price,
            totalPrice: desert.price * quantity
        }
        cart.push(cartItem)
    }
}
//after we create a function for creating alist of the deserts in the cart and calculating the total price of the cart
const renderCart = () => {
    cartCont.innerHTML = ""
    cart.forEach(item => {
        const cartItem = document.createElement("div")
    })
}
// and we creating a function for placing the order and then clearing the cart so we can add other


//here we are rendering the desert
desserts.forEach(dessert => {
    renderDesserts(dessert)
})