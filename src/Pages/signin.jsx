import React, { useState } from "react";
import { ArrowReturnLeft, Eye, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [uname, setuname] = useState("");
  const [password, setpassword] = useState("");
  const [reppass, setreppas] = useState("");
  const [email, setemail] = useState("");
  const nav = useNavigate();

  const sign = () => {
    if ((!uname && !email) || (!password && !reppass)) {
      alert("fill correctly");
    } else if (password === reppass) {
      setTimeout(() => {
        nav("/");
        localStorage.setItem("signname", uname);
      }, 1000);
    } else {
      alert("once again recheck");
    }
  };
  return (
    <>
      <section className="signin">
        <div className="news-head text-center mb-4">
          <div className="go-back">
            <Link to="/">
              <ArrowReturnLeft />
              Go Back
            </Link>
          </div>
          <div className="title">
            <h1>
              A<span>to</span>Z
            </h1>
            <h2>News</h2>
          </div>
          <div className="title-full text-center">
            <h6>The art of publishing</h6>
          </div>
        </div>

        <div className="container">
          <div className="sign-view text-center">
            <div className="sign-intro">
              <h4>Sign-in</h4>
            </div>

            <div className="name">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setuname(e.target.value);
                }}
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div className="repeat-pass">
              <input
                type="password"
                placeholder="Repeat-password"
                onChange={(e) => {
                  setreppas(e.target.value);
                }}
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="sign-btn text-center">
              <button className="btn btn-primary" onClick={sign}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
