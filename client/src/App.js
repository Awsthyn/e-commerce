import React from 'react';

import NewProductForm from "./components/NewProductForm"
import EditProductForm from "./components/EditProductForm"

function App() {
  let ejemplo = {
    id: 1,
    name: 'agus',
    description: '26 años',
    price: 50,
    stock: 50,
    image: 'lorem',
    category: [1, 2]
  }
  return (
    <>
    <EditProductForm product={ejemplo}/>
    </>
  );
}

export default App;
