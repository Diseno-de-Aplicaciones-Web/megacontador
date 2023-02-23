import { useState } from "react";

function App() {

  let [valorActual, setValorActual] = useState(0)
  let [numeroIncrementos, setNumeroDeUsos] = useState(0)
  let [numeroDecrementos, setNumeroDeDecrementos] = useState(0)

  function incrementar() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }

  function diminuir() {
    let novoValor = valorActual - 1
    setValorActual(novoValor)
  }

  function manexadorClickIncrementar() {
    const novoNumeroDeUsos = numeroIncrementos+1
    setNumeroDeUsos(novoNumeroDeUsos)
    incrementar()
  }

  function manexadorClickDiminuir() {
    const novoNumeroDeUsos = numeroDecrementos+1
    setNumeroDeDecrementos(novoNumeroDeUsos)
    diminuir()
  }

  return (
    <>
      <h1>{valorActual}</h1>
      <button onClick={manexadorClickIncrementar}>+({numeroIncrementos})</button>
      <button onClick={manexadorClickDiminuir}>-({numeroDecrementos})</button>
    </>
  )
  
}

export default App;
  