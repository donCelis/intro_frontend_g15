import { useState } from 'react'

// ciclo de vida de un componente
const LifeCicle = () => {
  /*
    reglas de los hooks
    --se deben ejecutar en la cabecera (logica) de un componente
    --no se pueden cargar en condicionales, ni ciclos
  */
  const [text, setText] = useState('')

  // se ejecuta siempre que se monta el componente o hay un cambio de estado
  /* useEffect(() => {
    setText('desde el useEffect')
    console.log('carga del componente')
  }) */

  // se ejecuta la primera vez que se carga el componente
  /* useEffect(() => {
    setText('desde el useEffect')
    console.log('se carga la primera vez')
  }, []) */

  // se ejecuta cuando hay un cambio en alguna dependencia
  /* useEffect(() => {
    setText('desde el useEffect')
    console.log('se carga la primera vez')

    if (text !== '') console.log('cambio de estado')
  }, [text]) */
}

export default LifeCicle
