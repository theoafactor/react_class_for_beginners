import './App.css'
import Navigation from './components/Navigation/Navigation'
import Button from './components/Button/Button'
import { useState } from "react"


function App() {

  const [ currentState, setState ] = useState("black")
  const [padding, setPadding] = useState(0)
  const [user, setUser] = useState({
    firstname: "",
    lastname: ""
  })

  function getDetailsFromChild(data){
    console.log("works from Child", data)
  }

  const updateStatus = () => {
    setState("green")
    setPadding("50px")
  }

  const addUser = () =>  {
      let firstname = document.getElementById("firstname").value
      let lastname = document.getElementById("lastname").value

      setUser({
        firstname: firstname,
        lastname: lastname
      })
    
  }
  

  return (
    <div style={{ backgroundColor: currentState, padding: padding }}>
      Welcome {user.firstname} {user.lastname}! Your current colour is: {currentState}
      <Navigation appname="ReactTest" fromchild={getDetailsFromChild} />
      <input type="text" id="firstname" placeholder='Enter firstname'/>
      <input type="text" id="lastname" placeholder='Enter lastname'/>
      <button onClick={() => addUser() }>Add User</button>
      <button onClick={() => updateStatus()}>Switch Bavkground Color</button>
    </div>
  )
}

export default App
