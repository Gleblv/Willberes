function modalCart () {
    const cartBtn = document.querySelector(".button-cart"),
          cart = document.querySelector("#modal-cart"),
          closeModalBtn = cart.querySelector(".modal-close");

    cartBtn.addEventListener("click", () => {
    cart.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
    cart.style.display = "";
    });
}

modalCart();