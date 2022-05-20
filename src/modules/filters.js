export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value)
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  })
}

export const priceFilterUp = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.price >= value;
  })
}

export const priceFilterDown = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value === '') {
      return goodsItem 
    } return goodsItem.price <= value;
  })
}

export const discountChecked = (goods) => {
  return goods.filter((goodsItem) => {
    return goodsItem.sale;
  })
}