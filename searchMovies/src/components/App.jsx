import { useState, useEffect, useRef } from 'react'

const apiKey = 'ea92314d'

function App () {
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

  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
    setText('desde un evento')
  }

  console.log(text)

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la pelicula...'
            className='form-control'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
    </section>
  )
}

export default App
