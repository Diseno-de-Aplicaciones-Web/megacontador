import { useState } from "react";

function Boton ({texto, operacion, type="primary"}) {
    
    let [numeroDeClicks, setNumeroDeClicks] = useState(0)

    function manexadorClick() {
        const novoNumeroDeClicks = numeroDeClicks+1
        setNumeroDeClicks(novoNumeroDeClicks)
        operacion()
    }

    return (
        <button className={
                "btn " +
                ( type === "primary" ? "btn-primary" : "") +
                ( type === "secondary" ? "btn-secondary" : "") +
                ( type === "success" ? "btn-success" : "") +
                ( type === "danger" ? "btn-danger" : "") +
                ( type === "warning" ? "btn-warning" : "") +
                ( type === "info" ? "btn-info" : "") +
                ( type === "ligth" ? "btn-ligth" : "") +
                ( type === "dark" ? "btn-dark" : "")
            }
            onClick={manexadorClick}
        >
            {texto}
            <span className="badge badge-light ml-2">
                {numeroDeClicks}
            </span>
        </button>
    )

}

export default Boton