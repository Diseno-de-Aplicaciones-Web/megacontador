# Ejercicio recopilatorio React

Crea una aplicación con React y ve transformandola para que pase por los siguiente estados:

1. **Contador simple** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/contador-un-boton/src)
    - Un único componente
    - Un  botón que incrementa un número:
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        ```
2. **Contador dos botones** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/contador-dos-botones/src)
    - Un único componente.
    - Un contador con dos botones: uno incrementa el contador y el otro lo disminuye.
        ```jsx
        <h1>0</h1>
        <button>Incrementar</button>
        <button>Reducir</button>
        ```
3. **Contador con dos botones que registran el número de veces que han sido pulsados** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/un-componente-dos-botones-contadores-de-click/src)
    - Un único componente.
    - Igual que el anterio, pero cada botón muestra cuantas veces ha sido pulsado.
        ```jsx
        <h1>0</h1>
        <button>Incrementar(0)</button>
        <button>Reducir(0)</button>
        ```

    _En este punto podemos empezar a notar que el código ha aumentado mucho de tamaño. En el siguiente punto moveremos parte de las funcionalidades del código a un componente nuevo para mantener la dividir esta tarea compleja en tareas más simples_.

4. **Contador dividido en dos componentes** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/dos-componente-botones-cuenta-click/src)
    - Dos componentes.
    - Sustituimos los botones por un componente `<Boton/>` propio que cuenta y muestra cuantas veces es pulsado y al que podamos personalizar:
        - El texto que muestra
        - La operación de incremento o decremento.
        ```jsx
        <h1>0</h1>
        <Boton texto="Incrementar" operacion={incremento}/>
        <Boton texto="Reducir" operacion={decremento}/>
        ```
5. **Contador dos componentes con reset** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/dos-componente-boton-reset/src)
  - Dos componentes
  - Añadimos un nuevo botón para establecer a cero el valor del contador.
    ```jsx
    <h1>0</h1>
    <Boton texto="Incrementar" operacion={incremento}/>
    <Boton texto="Reducir" operacion={decremento}/>
    <Boton texto="Reiniciar" operacion={reiniciar}/>
    ```
6. **Contador con incremento automático** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/dos-componentes-autoincremento/src)
 
    ⚠️ DIFICULTAD CONSIDERABLE ⚠️
 
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
7. **Aplicando Bootstrap** [↗️src](https://github.com/Diseno-de-Aplicaciones-Web/megacontador/tree/bootstrap/src)