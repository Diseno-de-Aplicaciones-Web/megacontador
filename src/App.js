import { useEffect, useState } from "react";
import Boton from "./Boton";
import "./App.css"

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

  function reiniciar() {
    setAuto(false)
    setValorActual(0)
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
    <main className="container">
      <div className="row">
        <div className="col-12 vh-100 d-flex flex-column justify-content-center">

            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">

                <h1 className="card-title">Megacontador</h1>

                <p id="contador" className="card-text">{valorActual}</p>

                <div className="btn-group">
                  <Boton texto="+" operacion={incrementar}/>
                  <Boton texto="-" operacion={diminuir} type="secondary"/>
                  <Boton texto="Reiniciar" operacion={reiniciar} type="danger"/>
                  <Boton texto="Auto" operacion={manexadorAuto}  type="success"/>
                </div>

              </div>
            </div>

        </div>
      </div>
    </main>
  )

}

export default App;