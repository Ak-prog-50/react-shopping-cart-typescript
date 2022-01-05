import React from 'react';
import { Counter } from './features/counter/Counter';
import Cart from './common/ShoppingCart/ShoppingCart'
import Shop from './common/Shop/Shop'

const data = [
  {
    "id": "1",
    "name": "Grunt Style American Reaper 2.0 T-Shirt - Black",
    "details": {
      "price": 19.99,
      "size": "xsmall",
      "tag": "Free Shipping",
      "image": "https://i.ebayimg.com/images/g/1UAAAOSwH1VaowKU/s-l300.jpg",
      "type": "t-shirt"
    }
  },
  {
    "id": "2",
    "name": "TRUE RELIGION Mens T-Shirt STARTER Black with White Print $95 Jeans NWT",
    "details": {
      "price": 24.99,
      "size": "small",
      "tag": "Free Shipping",
      "image": "https://i.ebayimg.com/images/g/0PMAAOSwA3dYCTBm/s-l500.jpg",
      "type": "t-shirt"
    }
  },
  {
    "id": "3",
    "name": "TRUE RELIGION Mens T-Shirt PART BUDDHA RAGLAN White Navy Sleeves $79 Jeans NWT",
    "details": {
      "price": 22.99,
      "size": "large",
      "tag": "",
      "image": "https://i.ebayimg.com/images/g/hv4AAOSwiBJZ6B24/s-l500.jpg",
      "type": "t-shirt"
    }
  },
  {
    "id": "4",
    "name": "Men’s Fred Perry Dress Shirts - Long Sleeve Classic Collar Slim Fit Shirt",
    "details": {
      "price": 51,
      "size": "large",
      "tag": "Free Shipping",
      "image": "https://i.ebayimg.com/thumbs/images/m/mZC41E_NsQNFjBdaRJm2dIQ/s-l225.jpg",
      "type": "dress shirts"
    }
  },
  {
    "id": "5",
    "name": "Seidensticker Tailored Chambray Stripe Long Sleeve Shirt - Blue/Grey",
    "details": {
      "price": 76.54,
      "size": "small",
      "tag": "Free Shipping",
      "image": "https://i.ebayimg.com/thumbs/images/m/mkScah0HO1z3jp1rJ8wBhrA/s-l225.jpg",
      "type": "dress shirts"
    }
  }
]

function App() {
  return (
    <>
      {/*Order By*/}
      {/*Sizes and Filter By type */}
      <Cart data={data}/>
      <Shop data={data}/>
    </>
  );
}

export default App;
