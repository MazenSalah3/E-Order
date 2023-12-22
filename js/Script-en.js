let content = document.querySelector(".content");
let listcard = document.querySelector(".listcard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let openshopping = document.querySelector(".cart-btn");
let closeshopping = document.querySelector(".closecard");
let quantity = document.querySelector(".quantity");
let quantity2 = document.querySelector("quantity2");
let star = document.querySelector("star"); 
let copy = document.querySelector(".logos-slide").cloneNode(true);
let loader = document.getElementById("preloader")
let toTop = document.querySelector(".to-top");
      

openshopping.addEventListener('click', ()=>{
    body.classList.add("active");
})
closeshopping.addEventListener('click', ()=>{
    body.classList.remove("active");
})
let Products = [
    {
        "id": 1,
        "name": "iPhone 14 Pro Max 256GB",
        "price": '68,999',
        "image": "/images/img1.jpg",
        "del" : "70,000" ,
        "offer": "/images/offer.png"
    },
    {
        "id": 2,
        "name": "PlayStation 5 Console",
        "price": '24,999',
        "image": "/images/img2.jpg",
        "del" : "25,999",
        "offer": "/images/offer.png"
    },
    {
        "id": 3,
        "name": "300.0 mAh Bluetooth",
        "price": '999',
        "image": "/images/img3.jpg",
        "del" : "1000",
        "offer": "/images/offer.png"
    },
    {
        "id": 4,
        "name": "iPhone 11 White 128GB 4G",
        "price": '27.000',
        "image": "/images/img4.jpg",
        "del" : "27.499",
        "offer": "/images/offer.png"
    },
    {
        "id": 5,
        "name": "AirPods Pro",
        "price": '11,500',
        "image": "/images/img5.jpg",
        "del" : "11999.00",
        "offer": "/images/offer.png"
    },
    {
        "id": 6,
        "name": "Logitech G29 Driving",
        "price": '18,999',
        "image": "/images/img6.jpg",
        "del" : "20000.00",
        "offer": "/images/offer.png"
    },
    {
        "id": 7,
        "name": "Xbox Wireless Controller",
        "price": '2600,00',
        "image": "/images/img7.jpg",
        "del" : "2700.00",
        "offer": "/images/offer.png"
    },
    {
        "id": 8,
        "name": "C53 Dual SIM Mighty Black",
        "price": '6500,00',
        "image": "/images/img8.jpg",
        "del" : "6999.00",
        "offer": "/images/offer.png"
    },
    {
        "id": 9,
        "name": "M90 Full-size Corded Mouse",
        "price": '150,00',
        "image": "/images/img9.jpg",
        "del" : "177.00",
        "offer": "/images/offer.png"
    },
    {
        "id": 10,
        "name": "32 Inch LED HD TV",
        "price": '4000,00',
        "image": "/images/img10.jpg",
        "del" : "4099.00",
        "offer": "/images/offer.png"
    }
];

let listcardItems = [];

function initAPP() {
    Products.forEach((value) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="content">
            <div class="box">
                <div class="star">
                    <label class="container">
                        <input type="checkbox">
                        <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    
                                c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    
                                c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    
                                c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    
                                s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    
                                s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294    
                                C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
                    </label>
                </div>
                <div class="img">
                    <img src="${value.image}">
                </div>
                <div class="offer">
                    <img src="${value.offer}">
                </div>
                <div class="dis">
                    ${value.name}
                    <br>
                    <div class="price"><span>EGP</span> ${value.price} <del>${value.del}</del></div>
                    <button onclick="addtocart(${value.id})" class="add">Add to cart</button>
                </div>
            </div>
        </div>
        `;

        content.appendChild(newDiv);
    });
}

function addtocart(id) {
    let product = Products.find(item => item.id === id);

    let existingItem = listcardItems.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        let newItem = { ...product, quantity: 1 };
        listcardItems.push(newItem);
    }

    reloadcard();
}

function reloadcard() {
    listcard.innerHTML = "";

    let count = 0;
    let totalprice = 0;

    listcardItems.forEach((value, key) => {
        totalprice += parseFloat(value.price.replace('EGP', '').replace(',', '')) * value.quantity;
        count += value.quantity;

        if (value.quantity > 0) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div class="cardtitle">${value.name}</div>
                <div class="cardprice">${value.price}</div>
                <div>
                    <button style="background-color:#fff" class="cardbutton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <button style="background-color:#fff" class="cardbutton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;

            listcard.appendChild(newDiv);
        }
    });
    quantity.innerText = count;
}


function changeQuantity(key, value) {
    if (value >= 0) {
        listcardItems[key].quantity = value;
        reloadcard();
    }
}

initAPP();

document.querySelector(".logos").appendChild(copy);

window.addEventListener("load", function(){
    loader.style.display ="none";
})


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
