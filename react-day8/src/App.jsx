// short circuit evaluation 

const App = () => { 

  const error = false
  return <div>
   {error ? <p>error</p> : <h2>obsah stranky</h2>}
  </div>
}

export default App