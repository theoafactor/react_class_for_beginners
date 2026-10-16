import "./RegisterForm.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

function RegisterForm(){
    //set all the states
    const [firstname, setFirstname] = useState("")
    const [firstname_error, setFirstnameError] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("");
    const [email_error, setEmailError] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleFirstnameUpdate = (event) => {
        let input = event.target.value;
        setFirstname(input)
    }

    const handleLastnameUpdate = (event) => {
        let input = event.target.value;
        setLastname(input)
    }

    const handleEmailUpdate = (event) => {
        let input = event.target.value;
        setEmail(input)
    }

    const handlePasswordUpdate = (event) => {
        let input = event.target.value;
        setPassword(input)
    }


    const registerUser = async (event) => {
        event.preventDefault()

        if(firstname.length == 0){
            setFirstnameError("You didnt enter firstname!")
        }else{
            setFirstnameError("")
        }


        if(email.length == 0){
            setEmailError("You did not enter email")
        }else{
            setEmailError("")
        }


        // send to backend 
        let feedback = await axios.post("http://localhost:2000/register", {
            firstname, lastname, email, password
        })

        console.log(feedback);

        if(feedback.data.code == "success"){
            // the user is registered on the backend
            // redirect to the user home page
            await navigate("/home")
        }

    }

    return (
        <>
            <form method="POST" onSubmit={registerUser}>
                <div className="form-group">
                    <label>First name</label>
                    <div><small>{firstname_error}</small></div>
                    <input type="text" value={firstname} onChange={handleFirstnameUpdate} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value={lastname} onChange={handleLastnameUpdate} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <div><small>{email_error}</small></div>
                    <input type="email" value={email} onChange={handleEmailUpdate} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePasswordUpdate}/>
                </div>

                  <div className="form-group">
                    <button>Create Account</button>
                </div>

            </form>
        </>

    )

}

export default RegisterForm