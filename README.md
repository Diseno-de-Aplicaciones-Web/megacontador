# Ejercicio recopilatorio React

Crea una aplicación con React y ve transformandola para que pase por los siguiente estados:

- Estado 1:
    - Un único componente
    - Un  botón que incrementa un número:
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        ```
- Estado 2:
    - Un único componente.
    - Un contador con dos botones: uno incrementa el contador y el otro lo disminuye.
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        <button>Reducir</button>
        ```
- Estado 3:
    - Un único componente.
    - Igual que el anterio, pero cada botón muestra cuantas veces ha sido pulsado.
        ```jsx
        <h1>0</h1>
        <button>Incrementar(0)</button>
        <button>Reducir(0)</button>
        ```

    En este punto podemos empezar a notar que el código ha aumentado mucho de tamaño. En el siguiente punto moveremos parte de las funcionalidades del código a un componente nuevo para mantener la dividir esta tarea compleja en tareas más simples.

- Estado 4:
    - Dos componentes.
    - Sustituimos los botones por un componente `<Boton/>` propio que cuenta y muestra cuantas veces es pulsado y al que podamos personalizar:
        - El texto que muestra
        - La operación de incremento o decremento.
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        ```
- Estado 5:
  - Dos componentes
  - Añadimos un nuevo botón para establecer a cero el valor del contador.
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        <Boton texto="Reiniciar" operacion={reiniciar}/>
        ```
- Estado 6:
    - ⚠️ DIFICULTAD CONSIDERABLE ⚠️
    - Esta parte está pensada para explicar el hook de React useEffect de forma completa. Para ello se ha optado por el empleo de dos funciones de JavaScript que nos permiten ejecutar acciones en el futuro: `setInterval` y `setTimeout`. Sin una explicación sobre estas cuestiones, no es sencillo terminar esta tarea.
    - Dos componentes.
    - Añadimos uno de nuestros `<Boton/>` que ponga en marcha el incremento automático del contador, de modo que su valor aumente cada segundo.
    - La parte más complicada es conseguir que no se produzcan comportamientos extraños cuando interactuamos con los botónes mientras el conteo automático está en marcha.
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        <Boton texto="Automático" operacion={iniciaAutomatico}/>
        ```