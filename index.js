async function fetchData() {
  const response = await fetch(
    "https://ecommerce-samurai.up.railway.app/product",
  );

  const Data = await response.json();

  const products = Data.data;

  return products;
}

async function renderProducts() {

  const productsList = document.querySelector("#all-products-list");
  const productsFilter = document.querySelector(
    ".products__header__filter",
  ).value;

  productsList.innerHTML = `<i class="fa-solid fa-spinner products__list__spinner"></i>`

    let Result = await fetchData();


  if (productsFilter === "Furniture") {
    Result = Result.filter((products) => products.category === "Furniture");
  }
  else if (productsFilter === 'Electronics'){
    Result = Result.filter((products) => products.category === 'Electronics')
  }
  else if (productsFilter === 'Lamps'){
    Result = Result.filter((products) => products.category === 'Lamps')
  }
  else if (productsFilter === 'Kitchen'){
    Result = Result.filter((products) => products.category === 'Kitchen')
  }
  else if (productsFilter === 'Chairs'){
    Result = Result.filter((products) => products.category === 'Chairs')
  }
  else if (productsFilter === 'Skin Care'){
    Result = Result.filter((products) => products.category === 'Skin Care')
  }
  const productsHTML = Result.map((products) => {
    return `<div class="product">
                <img src="https://ecommerce-samurai.up.railway.app/${products.images[0]}" alt="" class="product__img" />
                <div class="product__details">
                  <h3 class="product__details__title">${products.name}</h3>
                  <span class="product__details__price"> $${products.price} </span>
                </div>
              </div>`;
  }).join("");

  productsList.innerHTML = productsHTML;

  console.log(Result[0]);
}

renderProducts();
