import { placeholderPropertyObj } from "/properties/placeholderPropertyObj.js";
import { propertyForSaleArr } from "/properties/propertyForSaleArr.js";

const container = document.getElementById("container");

function getPropertyHtml() {
  if (propertyForSaleArr.length === 0) {
    const { propertyLocation, priceGBP, roomsM2, comment, image } =
      placeholderPropertyObj;
    container.innerHTML += `
        <section class="card">
          <img src="${image}">
          <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>${priceGBP}</h3>
            <p>${comment}</p>
            <h3>TOTAL SIZE IN SQUARE METRES ${roomsM2.reduce(
              (sum, size) => sum + size,
              0
            )} m&sup2;</h3>
          </div>
        </section>`;
  } else {
    propertyForSaleArr.forEach((property) => {
      const propertyTotalSize = property.roomsM2.reduce(
        (sum, size) => sum + size,
        0
      );
      container.innerHTML += `
          <section class="card">
            <img src="${property.image}">
            <div class="card-right">
              <h2>${property.propertyLocation}</h2>
              <h3>${property.priceGBP}</h3>
              <p>${property.comment}</p>
              <h3>TOTAL SIZE IN SQUARE METRES ${propertyTotalSize} m&sup2;</h3>
            </div>
          </section>`;
    });
  }
}

getPropertyHtml();
