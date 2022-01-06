import Cart from './features/ShoppingCart/ShoppingCart'
import Shop from './features/Shop/Shop'

const data :any = []

function App() {
  return (
    <>
      {/*Order By*/}
      {/*Sizes and Filter By type */}
      <Cart data={data}/>
      <Shop />
    </>
  );
}

export default App;
