var modal = document.getElementById("myModal");
var btn = document.getElementById("shoppingCart");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    displayCart();
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        if (flagDuplicate.length > 0){
            while (flagDuplicate.length > 0) {
                flagDuplicate.pop();
                console.log(flagDuplicate);
               
            }
        }

        totalPrice = 0;
    }
}

//SLIDESHOW 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//PRODUCTS
let productList;
let productImage = [];
let shoppingCart = [];
let productCartImage = [];
let cartContainer = document.getElementById("cartContain");
let cartNumItems = document.getElementById("numItems");
let cartNotification = document.getElementById("notification");
let totalPrice = 0;
let index = 0;
let flagDuplicate = ["", ""];
const productListObject = {
    "product": [{
            "name": "Hinata Shoyo Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Haikyuu!! Hinata Keychain",
            "price": "150.00"

        },
        {
            "name": "Central Perk Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Friends Central Perk Keychain",
            "price": "100.00"
        },
        {
            "name": "Unicorn Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Independent Unicorn Keychain",
            "price": "80.00"
        },
        {
            "name": "Jett's Knife Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Valorant Jett's Knife Keychain",
            "price": "150.00"
        },
        {
            "name": "Wings of Freedom Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Attack On Titan Wings of Freedom Keychain",
            "price": "200.00"
        },
        {
            "name": "Jisoo Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Blackpink Jisoo Keychain",
            "price": "200.00"
        },
        {
            "name": "Mikasa Ackerman Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Attack On Titan Mikasa Ackerman Keychain",
            "price": "200.00"
        },
        {
            "name": "Levi Ackerman Keychain",
            "brand": "StormThorn Handmade Goods",
            "description": "Attack On Titan Levi Ackerman Keychain",
            "price": "200.00"
        }
    ]
};

for (let key in productListObject) {
    if (productListObject.hasOwnProperty(key)) {
        productList = productListObject[key];
    }
}


const createProductElements = () => {
    let counter = 0;
    // getting the products container div 
    let productsContainer = document.getElementById("container");

    productList.forEach(entry => {
        //creating product holder div
        let newProduct = document.createElement("div");
        newProduct.className = "product-holder";
        newProduct.setAttribute("id", productList[counter].name);

        let newProduct2 = document.createElement("div");
        newProduct2.className = "product";
        newProduct2.setAttribute("id", productList[counter].name);
        productImage[counter] = new Image();
        productImage[counter] = document.createElement("img");
        switch (counter) {
            case 0:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-hinata.png");
                break;
            case 1:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-central-perk.png");
                break;
            case 2:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-unicorn.png");
                break;
            case 3:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-jetts-knife.png");
                break;
            case 4:
                //creting img element
                productImage[counter].setAttribute("src", "../img/product-wings.png");
                break;
            case 5:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-jisoo.png");
                break;
            case 6:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-mikasa.png");
                break;
            case 7:
                //creating img element
                productImage[counter].setAttribute("src", "../img/product-levi.png");
                break;

        }
        //creating h5 element
        let productName = document.createElement("h4");
        productName.appendChild(document.createTextNode(`${productList[counter].name}`));
        //creating h3 element
        let productPrice = document.createElement("h3");
        productPrice.appendChild(document.createTextNode(`P ${productList[counter].price}`));
        //creating button element
        let productAddToCart = document.createElement("button");
        productAddToCart.appendChild(document.createTextNode("Add to Cart"));
        productAddToCart.setAttribute("id", `${counter}`);
        productAddToCart.setAttribute("onclick", `addToCart(${counter})`);

        //Inserting img in product-holder div
        newProduct.appendChild(productImage[counter]);
        newProduct2.appendChild(productName);
        newProduct2.appendChild(productPrice);
        newProduct2.appendChild(productAddToCart);
        newProduct.appendChild(newProduct2);
        //Inserting product-holder div in products-container div
        productsContainer.appendChild(newProduct);
        counter++;
    })

}

createProductElements();

function addToCart(e) {
    let addToCartElement = document.getElementById(e.toString());
    let addToCartId = addToCartElement.getAttribute("id");

    shoppingCart[index] = productList[addToCartId];


    alert(productList[addToCartId].name + " is added to your cart");
    console.log(shoppingCart);
    console.log("shopping cart ^");
    index++;
    cartNumItems.innerText = `Number of items in cart: ${shoppingCart.length}`;
    cartNotification.innerText = shoppingCart.length;

    if (shoppingCart.length > 0) {
        cartNotification.style.display = "inline-block"
    }
}

function displayCart() {
    let cartTitle = document.createElement("h1");
    cartTitle.appendChild(document.createTextNode("Cart"));

    if (shoppingCart.length === 0) {
        cartContainer.textContent = ""
        cartNumItems.innerText = "Number of items in cart: 0";
        span = document.createElement("span");
        span.className = "close";
        span.innerText = "x";

        span.onclick = function() {
            modal.style.display = "none";
            if (flagDuplicate.length > 0){
                while (flagDuplicate.length > 0) {
                    flagDuplicate.pop();
                    console.log(flagDuplicate);
                    break;
                }
            }

            totalPrice = 0;
        }
        cartContainer.appendChild(span);
        cartContainer.appendChild(cartTitle);
        cartContainer.appendChild(cartNumItems);
        console.log(cartContainer);
    } else {
        index = 0;
        cartContainer.textContent = ""
        let productCartCounter = 0;
        let productString = "";

        span = document.createElement("span");
        span.className = "close";
        span.innerText = "x";
        cartContainer.appendChild(span);

        span.onclick = function() {
            modal.style.display = "none";
            if (flagDuplicate.length > 0){
                while (flagDuplicate.length > 0) {
                    flagDuplicate.pop();
                    console.log(flagDuplicate);
                    break;
                }
            }

            totalPrice = 0;
        }


        cartContainer.appendChild(cartTitle);
        cartContainer.appendChild(cartNumItems);

        shoppingCart.forEach(() => {
            let cartItem = document.createElement("div");
            cartItem.className = "cart-item-holder";
            cartItem.setAttribute("id", `${shoppingCart[index].name}`);
            productString = cartItem.getAttribute("id");

            let cartItem2 = document.createElement("div");
            cartItem2.className = "cart-item";
            cartItem2.setAttribute("id", `${shoppingCart[index].name}`);

            productCartImage[index] = new Image();
            productCartImage[index] = document.createElement("img");

            productCartCounter = shoppingCart.filter((shopCart) => shopCart.name === productString).length;
            console.log(productCartCounter);

            switch (productString) {
                case "Hinata Shoyo Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-hinata.png");
                    break;
                case "Central Perk Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-central-perk.png");
                    break;
                case "Unicorn Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-unicorn.png");
                    break;
                case "Jett's Knife Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-jetts-knife.png");
                    break;
                case "Wings of Freedom Keychain":
                    //creting img element
                    productCartImage[index].setAttribute("src", "../img/product-wings.png");
                    break;
                case "Jisoo Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-jisoo.png");
                    break;
                case "Mikasa Ackerman Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-mikasa.png");
                    break;
                case "Levi Ackerman Keychain":
                    //creating img element
                    productCartImage[index].setAttribute("src", "../img/product-levi.png");
                    break;
            }

            let cartProductName = document.createElement("h3");
            cartProductName.appendChild(document.createTextNode(`Item name : ${shoppingCart[index].name}`));

            let cartProductPrice = document.createElement("h3");
            cartProductPrice.appendChild(document.createTextNode(`Item price : P ${shoppingCart[index].price}`))

            let productQty = document.createElement("h3");
            productQty.appendChild(document.createTextNode(`Quantity: ${productCartCounter}`));

            totalPrice += parseFloat(shoppingCart[index].price);
            cartItem.appendChild(productCartImage[index]);
            cartItem2.appendChild(cartProductName);
            cartItem2.appendChild(cartProductPrice);
            cartItem2.appendChild(productQty);

            if (productCartCounter == 1) {
                cartItem.appendChild(cartItem2);
                cartContainer.appendChild(cartItem);
            } else if (productCartCounter > 1) {
                if (!flagDuplicate.includes(productString)) {
                    cartItem.appendChild(cartItem2);
                    cartContainer.appendChild(cartItem);
                    flagDuplicate.push(productString);
                }
            }

            console.log(flagDuplicate);

            index++;
        })

        let checkOutBtn = document.createElement("button");
        checkOutBtn.appendChild(document.createTextNode("Checkout"));
        checkOutBtn.addEventListener("click", checkout);
        cartContainer.appendChild(checkOutBtn);

    }

    function checkout() {
        alert("Total Price: P" + totalPrice + "\nThank you for shopping! See you again next time!");
        while (shoppingCart.length > 0) {
            shoppingCart.pop();
        }
        modal.style.display = "none";
        index = 0;
        totalPrice = 0;
        document.body.overflowY = "auto";
        cartNotification.innerText = "0";
        cartNotification.style.display = "none"
    }

}