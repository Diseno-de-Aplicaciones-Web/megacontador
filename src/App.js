import { useState } from "react";

function App() {

  let [valorActual, setValorActual] = useState(0)

  function manexadorClick() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }


  return (
    <>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClick}>Contador</button>
    </>

  );
}

export default App;
  