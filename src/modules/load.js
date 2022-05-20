import getData from "./getData";
import postData from "./postData";
import renderGoods from "./renderGoods";
import cart from "./cart";

const load = () => {
    getData().then((data) => {
    renderGoods(data);
  });
};

export default load;
