const allProducts = document.getElementById("all__product");

const displayFromLocalStorage = () => {
  const cart = shoppingCart();
  for (const name in cart) {
    disPlayProduct(name);
  }
};

// add to cart

document.getElementById("add__to__cart").addEventListener("click", (e) => {
  e.preventDefault();
  const productInput = document.getElementById("product__name");
  const productName = productInput.value;
  if (productName !== "") {
    // display the products
    disPlayProduct(productName);

    //add to local storage
    addToCart(productName);
  } else {
    alert("Write Something");
  }

  productInput.value = "";
});

// display product

const disPlayProduct = (name) => {
  const ol = document.getElementById("all__product");
  const li = document.createElement("li");
  li.innerText = name;
  ol.appendChild(li);
};

// get local storage

const shoppingCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (!cart) {
    cartObj = {};
  } else {
    cartObj = JSON.parse(cart);
  }

  return cartObj;
};

// add to local storage

const addToCart = (name) => {
  const cart = shoppingCart();
  if (!cart[name]) {
    cart[name] = 1;
  } else {
    cart[name] = cart[name] + 1;
  }
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// place order

document.getElementById("place__order").addEventListener("click", () => {
  allProducts.textContent = "";
  localStorage.removeItem("cart");
});

displayFromLocalStorage();
