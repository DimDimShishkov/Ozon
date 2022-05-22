import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, discountFilter } from "./filters";

const filter = () => {
  const maxPrice = document.getElementById("max");
  const minPrice = document.getElementById("min");
  const discountBox = document.getElementById("discount-checkbox");
  const discountCheckState = document.querySelector(".filter-check_checkmark");

  minPrice.addEventListener("input", () => {
    getData().then((data) => {
      renderGoods(priceFilter(discountFilter(data, discountBox.checked), minPrice.value, maxPrice.value));
    });
  });
  maxPrice.addEventListener("input", (event) => {
    getData().then((data) => {
      renderGoods(priceFilter(discountFilter(data, discountBox.checked), minPrice.value, maxPrice.value));
    });
  });

  discountBox.addEventListener("change", () => {
    if (discountBox.checked) {
      discountCheckState.classList.add("checked");
    } else {
      discountCheckState.classList.remove("checked");
    }
    getData().then((data) => {
      renderGoods(priceFilter(discountFilter(data, discountBox.checked), minPrice.value, maxPrice.value));
    });
  });
};

export default filter;
