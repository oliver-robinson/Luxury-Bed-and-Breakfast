import React from "react"

function Signup() {
    return(
        <div className="container">
            <div className="row">
                <div className="signup-wrapper col-md-12">
                    <form>
                        <fieldset>
                            <legend>Sign Up</legend>
                            <label htmlFor="email">Email: <input type="text" id="email" name="email" /></label>
                            <label htmlFor="fName">First Name: <input type="text" id="fName" name="firstName" /></label>
                            <label htmlFor="lName">Last Name: <input type="text" id="lName" name="lastName" /></label>
                            <label htmlFor="password">Password: <input type="text" id="password" name="password" /></label>
                            <legend>Birthday</legend>
                            <p>To sign up, you must be 18 or older. Other people won’t see your birthday.</p>
                            <input type="date" id="bday" name="bday" value="2018-07-22" min="1900-01-01" max="2019-12-31" />
                            <button className="signup-button" type="button">Sign Up</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup