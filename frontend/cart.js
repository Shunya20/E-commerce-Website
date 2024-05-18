const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click",() => {
    body.classList.add("active")
})
closeShopping.addEventListener("click",() => {
    body.classList.remove("active")
})

let products = [
    {
        id: 1,
        name:" Product 1",
        images: "f1.jpg",
        price: 87
    },
    {
        id: 2,
        name:" Product 1",
        images: "f2.jpg",
        price: 87
    },
    {
        id: 3,
        name:" Product 1",
        images: "f3.jpg",
        price: 87
    },
    {
        id: 4,
        name:" Product 1",
        images: "f4.jpg",
        price: 87
    },
    {
        id: 5,
        name:" Product 1",
        images: "f5.jpg",
        price: 87
    },
    {
        id: 6,
        name:" Product 1",
        images: "f6.jpg",
        price: 87
    },

    {
        id: 7,
        name:" Product 1",
        images: "f7.jpg",
        price: 87
    },
    {
        id: 8,
        name:" Product 1",
        images: "f8.jpg",
        price: 87
    },
    {
        id: 9,
        name:" Product 1",
        images: "n1.jpg",
        price: 87
    },
    {
        id: 10,
        name:" Product 1",
        images: "n2.jpg",
        price: 87
    },
    {
        id: 11,
        name:" Product 1",
        images: "n3.jpg",
        price: 87
    },
    {
        id: 12,
        name:" Product 1",
        images: "n4.jpg",
        price: 87
    }
]


let listCards = [];

const initApp = () =>{
    products.forEach((value,key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = 
        `
        <img src = "${value.images}">
        <div class = "title">${value.name}</div>
        <div class = "price">$${value.price.toLocaleString()}</div>
        <button onClick="addToCard(${key})">Add To Cart</button>
        `

        list.appendChild(newDiv)
    })
}

initApp();


const addToCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;


    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML =

            `
            <div><img src = "${value.images}"></div>
            <div class = "cardTitle">${value.name}</div>
            <div class = "cardPrice">$${value.price.toLocaleString()}
            </div>            

            <div> 
            <button style = "background-color: #088178" 
            class="cardButton"  onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            <div class = "count"> ${value.quantity}</div>
            <button style = "background-color: #088178" 
            class = "cardButton" onclick = "changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            `

            listCard.appendChild(newDiv);

        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key,quantity) =>{
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard()
}