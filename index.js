import { placeholderPropertyObj } from "/properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "/properties/propertyForSaleArr.js";

const container = document.getElementById("container");

function renderProperty() {
  propertyForSaleArr.forEach((property) => {
    container.innerHTML += `
        <section class="card">
    <img src="${property.image}">
    <div class="card-right">
        <h2>${property.propertyLocation}</h2>
        <h3>${property.priceGBP}</h3>
        <p>${property.comment}</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section>
        `;
  });
}
renderProperty(propertyForSaleArr, placeholderPropertyObj);
