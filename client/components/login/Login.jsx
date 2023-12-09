export default function Login() {
    return (
        <div className="container">
            <div className="box animated fadeInUp">
                <div className="box-header">
                    <h2>Log In</h2>
                </div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" name="email"/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id="password" name="password"/>
                <br />
                <button type="submit">Sign In</button>
                <br />
                <a href="/register"><p className="larger">Don't have an account ?</p></a>
            </div>
        </div>
    );
};