import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilterDown } from "./filters";

const priceDown = () => {
  const maxPrice = document.getElementById('max');

  maxPrice.addEventListener('input', (event) => {
    const price = event.target.value;
    
    getData().then((data) => {
      renderGoods(priceFilterDown(data, price));
    });
  })
}

export default priceDown