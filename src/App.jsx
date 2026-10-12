import './App.css'
import Navigation from './components/Navigation/Navigation'


function App() {

  function getDetailsFromChild(data){
    console.log("works from Child", data)
  }

  return (
    <>
      <Navigation appname="ReactTest" fromchild={getDetailsFromChild} />
    </>
  )
}

export default App
