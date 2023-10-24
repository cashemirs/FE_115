const allProducts = [{
        name: 'banana',
        uniqId: 74638,
        price: 8,
        quantity: 200,
        discount: 0.03,
        isDiscount: true,
        isBought: false
    },
    {
        name: 'cucumber',
        uniqId: 2334,
        price: 4,
        quantity: 100,
        discount: 0,
        isDiscount: false,
        isBought: false
    },
    {
        name: 'pear',
        uniqId: 234,
        price: 18,
        quantity: 0,
        discount: 0.5,
        isDiscount: true,
        isBought: false
    },
    {
        name: 'apple',
        uniqId: 3322,
        price: 18,
        quantity: 2,
        discount: 0.1,
        isDiscount: true,
        isBought: false
    },
    {
        name: 'potato',
        uniqId: 333,
        price: 2,
        quantity: 2000,
        discount: 0,
        isDiscount: false,
        isBought: false
    },
    {
        name: 'coconut',
        uniqId: 3498,
        price: 80,
        quantity: 10,
        discount: 0.1,
        isDiscount: true,
        isBought: false
    }
]
let userCart = []
console.log(allProducts.uniqId)

function addToCart(uniqId, quantity) {
    const product = allProducts.find(item => item.uniqId === uniqId);

    if (product && quantity <= product.quantity && !userCart.some(item => item.uniqId === uniqId)) {
        userCart.push({
            ...product,
            quantity
        });
        console.log("Success");
    } else if (product && quantity <= product.quantity && userCart.some(item => item.uniqId === uniqId)) {
        const cartItem = userCart.find(item => item.uniqId === uniqId);
        cartItem.quantity = quantity;
        console.log("Success");
    } else {
        console.log("404");
    }
}

function buyProducts() {
    for (const cartItem of userCart) {
        const product = allProducts.find(item => item.uniqId === cartItem.uniqId);
        if (product && cartItem.quantity <= product.quantity) {
            product.quantity -= cartItem.quantity;
            cartItem.isBought = true;
        }
    }
    userCart = [];
}

function showTotalPrice() {
    let totalPrice = 0;
    for (const cartItem of userCart) {
        totalPrice += cartItem.price * cartItem.quantity;
    }
    return totalPrice;
}
function showUserCard(direction) {
    if (direction === "asc") {
        return userCart.sort((a, b) => a.price - b.price);
    } else if (direction === "desc") {
        return userCart.sort((a, b) => b.price - a.price);
    }
     
  }