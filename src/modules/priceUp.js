import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilterUp } from "./filters";

const priceUp = () => {
  const minPrice = document.getElementById('min');

  minPrice.addEventListener('input', (event) => {
    const price = event.target.value;
    
    getData().then((data) => {
      renderGoods(priceFilterUp(data, price));
    });
  })
}

export default priceUp