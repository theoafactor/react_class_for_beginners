function Register(props){



    return (

            <form className="form">
                <h3>Register { props.whatever }, Your color is {props.color}</h3>
                <div>
                    <label>Username: </label>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>

                <div>
                    <button>Create Account</button>
                </div>
            </form>



    )


}


export default Register