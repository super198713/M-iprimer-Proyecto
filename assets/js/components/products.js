function products(products) {
  const db = [...products];

  function printProducts() {
    const productsDOM = document.querySelector(".products__container");

    let htmlProduct = "";

    for (const product of db) {
      htmlProduct += `
        <article class="product">
          <div class="product__image">
            <img
              src="${product.image}"
              alt="${product.name}"
            />
          </div>
          <div class="product__content">
            <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
              <img src="./assets/img/carrito-de-compras.png">
            </button>
            <span class="product__price">$${product.price}</span>
            <span class="product__stock">Disponibles: ${product.quantity}</span>
            <span class="product__shirt">shirt</span>z
            <span class="product__sources">Medidas <br> <span class="product__sources1">XS,S,M,L,XL,XXL</span></span>
            <span class="product__colors">colores
                <ul class="product__colors-1">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </span>
            <h3 class="product__title">
              ${product.name}
            </h3>
          </div>
        </article>
      `;
    }

    productsDOM.innerHTML = htmlProduct
  }

  printProducts()

  return {
    db,
    printProducts
  }
}

export default products;