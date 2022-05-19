const getData = () => {
  return fetch("https://testozon-9bcf2-default-rtdb.firebaseio.com/goods.json").then(
    (response) => {
      return response.json();
    }
  );
};

export default getData;
