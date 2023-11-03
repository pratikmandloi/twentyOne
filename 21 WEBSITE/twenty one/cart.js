const card = document.getElementById("cart-btn");

const userToken = JSON.parse(localStorage.getItem("userToken"));

card.onclick = () => {
  fetchCartData(userToken);
};

function fetchCartData(userToken) {
  console.log("API Running");

  fetch(`http://localhost:5055/api/order/get-carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log("Cart Data : ", data);

      const carts = data.order.cart;
      const cartItemMain = document.getElementById("carts-items-main");
      cartItemMain.innerHTML = "";

      const allCarts = carts.map((item, idx) => {
        console.log(item);

        if (item.status == "Success") return null;

        return `<div class="cart-item" id="cart-item-${idx}">
            <div class="left">
              <img src=${item.image} alt="" />
            </div>
            <div class="center">
              <div class="product-title">
                <p class="product-heading" id="product-cart-title">${item.title}</p>
                <p id="product-cart-price">&#8377; ${item.price}</p>
              </div>
              <p class="product-color">Product Color &#47; <span>${item.attribute}</span></p>
              <div class="quantity">
                <p>Quantity</p>
                <div class="quantity-count" id="product-cart-quantity">
                  <span id="minus">-</span>
                  <span id="counter">${item.quantity}</span>
                  <span id="plus">+</span>
                </div>
              </div>
              <div class="delete-item"  id="product-cart-delete-${idx}"
                value=${item._id}>
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </div>
            </div>
          </div>`;
      });

      // console.log(allCarts);

      cartItemMain.innerHTML += allCarts;
      const cartContainer = document.getElementById("cart-item-container");
      cartContainer.appendChild(cartItemMain);
      
      allCarts.forEach((ele,idx) => {
        
        const parser = new DOMParser();

        const doc = parser.parseFromString(ele, 'text/html');

        // console.log(doc, `product-cart-delete-${idx}`);

        const cardItem = document.getElementById(`product-cart-delete-${idx}`);

        // console.log(cardItem);

        cardItem.onclick = () => {
            const cardId = cardItem.getAttribute("value");

            fetch(`http://localhost:5055/api/order/delete-cart/${cardId}`,{
                method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                }
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                const newCart = document.getElementById(`cart-item-${idx}`);
                newCart.remove();
            }).catch((err) => {
                console.log(err);
            });

        }
      });


      // const cartTitle = document.getElementById("product-cart-title");
      // const cartPrice = document.getElementById("product-cart-title");
      // const cartQuantity = document.getElementById("product-cart-quantity");

      // cartTitle.innerText = item.title;
      // cartPrice.innerText = item.price;
    
      //   const deleteCart = document.getElementById("product-cart-delete");
      //   deleteCart.onclick = (e) => {
      //     console.log(e.target);
      //     console.log(deleteCart.getAttribute("cart-id"));
      //     console.log(`Delete API`);
      //   };
    })
    .catch((err) => {
      console.log(err);
    });
}
