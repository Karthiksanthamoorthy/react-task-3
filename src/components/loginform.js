import React, {useEffect, useState} from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
                <div className="twitter"></div>
                <div className="github"></div>
            </div>
            <div class="home-social">
                <a href="https://www.facebook.com/" class="home_social-icon" target="_blank"><i class="bx bxl-facebook-circle"></i>Facebook</a>
                <a href="https://www.google.com/" class="home_social-icon" target="_blank"><i class="bx bxl-google"></i>Google</a>
                <a href="https://www.twitter.com/" class="home_social-icon" target="_blank"><i class="bx bxl-twitter"></i>Twitter</a>
                <a href="https://www.github.com/" class="home_social-icon" target="_blank"><i class="bx bxl-github"></i>Github</a>         
</div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
        </div>
    )
}

export default LoginForm
