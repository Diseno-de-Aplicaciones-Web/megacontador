import { useEffect, useState } from "react";
import Boton from "./Boton";

function App() {

  let [valorActual, setValorActual] = useState(0)
  let [auto, setAuto] = useState(false)

  function incrementar() {
    let novoValor = valorActual + 1
    setValorActual(novoValor)
  }

  function diminuir() {
    let novoValor = valorActual - 1
    setValorActual(novoValor)
  }

  function manexadorAuto() {
    setAuto(true)
  }

  useEffect(
    ()=>{
      let codigoTemporizador
      if (auto) { codigoTemporizador = setTimeout(incrementar, 1000) }
      return ()=>{clearTimeout(codigoTemporizador)}
    },
    [auto, valorActual]
  )

  return (
    <>
      <h1>{valorActual}</h1>
      <Boton texto="+" operacion={incrementar}/>
      <Boton texto="-" operacion={diminuir}/>
      <Boton texto="Auto" operacion={manexadorAuto}/>
    </>
  )

}

export default App;