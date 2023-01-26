import ShoppingCart from "./components/ShoppingCart";

export const decrease = (cart, product, setProducts) => {
  if (product.getTotalItems > 0) {
    // console.log(`Decrease product with sku ${product.sku}`);
    // setProducts(product -1);
    ShoppingCart.decrease(product.getTotalItems, cart, setProducts);
  }


};

export const increase = (cart, product) => {
  console.log(`Increase product with sku ${product.sku}`);
  let updateCart = [...cart];
  let index = updatedCart.findIndex(p => p.sku === product.sku);
  console.log(index);
  // if(index !== -1){
  //   updatedCart[index].quantity++;
  // }
  // return updatedCard;
};

export const getTotalPrice = (cart) => parseFloat(4300).toFixed(2);

export const getTotalItems = (cart) => 0;
