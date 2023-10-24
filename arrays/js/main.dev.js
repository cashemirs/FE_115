"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allProducts = [{
  name: 'banana',
  uniqId: 74638,
  price: 8,
  quantity: 200,
  discount: 0.03,
  isDiscount: true,
  isBought: false
}, {
  name: 'cucumber',
  uniqId: 2334,
  price: 4,
  quantity: 100,
  discount: 0,
  isDiscount: false,
  isBought: false
}, {
  name: 'pear',
  uniqId: 234,
  price: 18,
  quantity: 0,
  discount: 0.5,
  isDiscount: true,
  isBought: false
}, {
  name: 'apple',
  uniqId: 3322,
  price: 18,
  quantity: 2,
  discount: 0.1,
  isDiscount: true,
  isBought: false
}, {
  name: 'potato',
  uniqId: 333,
  price: 2,
  quantity: 2000,
  discount: 0,
  isDiscount: false,
  isBought: false
}, {
  name: 'coconut',
  uniqId: 3498,
  price: 80,
  quantity: 10,
  discount: 0.1,
  isDiscount: true,
  isBought: false
}];
var userCart = [];
console.log(allProducts.uniqId);

function addToCart(uniqId, quantity) {
  var product = allProducts.find(function (item) {
    return item.uniqId === uniqId;
  });

  if (product && quantity <= product.quantity && !userCart.some(function (item) {
    return item.uniqId === uniqId;
  })) {
    userCart.push(_objectSpread({}, product, {
      quantity: quantity
    }));
    console.log("Success");
  } else if (product && quantity <= product.quantity && userCart.some(function (item) {
    return item.uniqId === uniqId;
  })) {
    var cartItem = userCart.find(function (item) {
      return item.uniqId === uniqId;
    });
    cartItem.quantity = quantity;
    console.log("Success");
  } else {
    console.log("404");
  }
}

function buyProducts() {
  var _loop = function _loop() {
    var cartItem = _userCart[_i];
    var product = allProducts.find(function (item) {
      return item.uniqId === cartItem.uniqId;
    });

    if (product && cartItem.quantity <= product.quantity) {
      product.quantity -= cartItem.quantity;
      cartItem.isBought = true;
    }
  };

  for (var _i = 0, _userCart = userCart; _i < _userCart.length; _i++) {
    _loop();
  }

  userCart = [];
}

function showTotalPrice() {
  var totalPrice = 0;

  for (var _i2 = 0, _userCart2 = userCart; _i2 < _userCart2.length; _i2++) {
    var cartItem = _userCart2[_i2];
    totalPrice += cartItem.price * cartItem.quantity;
  }

  return totalPrice;
}

function showUserCard(direction) {
  if (direction === "asc") {
    return userCart.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (direction === "desc") {
    return userCart.sort(function (a, b) {
      return b.price - a.price;
    });
  }
}