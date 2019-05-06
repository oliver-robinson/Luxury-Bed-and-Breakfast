import React from "react"

function Login() {
    return(
        <div className="container">
            <div className="row">
                <div className="login-wrapper col-md-12">
                    <form>
                        <fieldset>
                            <legend>Sign Up</legend>
                            <label htmlFor="email">Email: <input type="text" id="email" name="email" /></label>
                            <label htmlFor="password">Password: <input type="text" id="password" name="password" /></label>
                            <button className="login-button" type="button">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login