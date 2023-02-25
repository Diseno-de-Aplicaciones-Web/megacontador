import { useState } from "react";
import Boton from "./Boton";

function App() {

  let [valorActual, setValorActual] = useState(0)

  function incrementar() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }

  function diminuir() {
    let novoValor = valorActual - 1
    setValorActual(novoValor)
  }

  function reiniciar() {
    setValorActual(0)
  }

  return (
    <>
      <h1>{valorActual}</h1>
      <Boton texto="+" operacion={incrementar}/>
      <Boton texto="-" operacion={diminuir}/>
      <Boton texto="Reiniciar" operacion={reiniciar}/>
    </>
  )

}

export default App;