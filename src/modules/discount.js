import getData from "./getData";
import renderGoods from "./renderGoods";
import { discountChecked } from "./filters";

const discount = () => {
  const discountBox = document.getElementById('discount-checkbox');
  discountBox.addEventListener('input', (event) => {
    getData().then((data) => {
      renderGoods(discountChecked(data));
    });
  })
}

export default discount