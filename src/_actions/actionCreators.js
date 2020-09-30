import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPr2UALCK6oF6MnHx9tgtBcjJjKkun6rk",
    authDomain: "fabulous-stack.firebaseapp.com",
    databaseURL: "https://fabulous-stack.firebaseio.com",
    projectId: "fabulous-stack",
    storageBucket: "fabulous-stack.appspot.com",
    messagingSenderId: "631057899084"
};
firebase.initializeApp(config);
/**
 * Action Creator para cuando se desea hacer pruebas offline
 */
const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
};

const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  }
};

const loadProducts = () => {
// const loadProductsOffline = () => {
  let products = [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
  ];
  return {
    type: 'LOAD_PRODUCTS',
    products: products,
    cart:[]
  };
}

export {addToCart, removeFromCart, loadProducts};