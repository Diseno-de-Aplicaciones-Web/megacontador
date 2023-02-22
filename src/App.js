import { useState } from "react";

function App() {

  let [valorActual, setValorActual] = useState(0)

  function manexadorClickIncrementar() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }


  function manexadorClickDiminuir() {
    let novoValor = valorActual - 1
    setValorActual(novoValor)
  }

  return (
    <>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickIncrementar}>+</button>
      <button onClick={manexadorClickDiminuir}>-</button>
    </>

  );
}

export default App;
  