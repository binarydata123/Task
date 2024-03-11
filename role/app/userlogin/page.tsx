"use client";
import React from "react";
import "./page.css";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Moving Home Page");
    router.push("/home");
  };
  return (
    <>
      <div>
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder"></div>
            <form method="post">
              <h2 className="text-center">
                <strong>Create</strong> an account.
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password-repeat"
                  placeholder="Password (repeat)"
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />I
                    agree to the license terms.
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Sign Up
                </button>
              </div>
              <a href="#" className="already">
                You already have an account? Login here.
              </a>
            </form>
          </div>
        </div>
        <button className="btn btn-primary btn-block" onClick={handleClick}>
          Next Page
        </button>
      </div>
    </>
  );
}

export default page;
