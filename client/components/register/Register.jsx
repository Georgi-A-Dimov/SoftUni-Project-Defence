export default function Register() {
    return (
        <div className="container">
            <div className="box animated fadeInUp">
                <div className="box-header">
                    <h2>Register</h2>
                </div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password" />
                <br />
                <label htmlFor="re-password">Confirm Password</label>
                <br />
                <input type="password" id="confirmPassword" name="confirmPassword" />
                <br />
                <button type="submit">Sign Up</button>
                <br />
                <a href="/login"><p className="larger">Already have an account?</p></a>
            </div>
        </div>
    );
};