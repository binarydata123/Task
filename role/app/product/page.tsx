"use client"
import React from "react";
import "./page.css";
import Link from "next/link";
import {Form,Input} from"antd";

const page = () => {
  return (
    <div className="login-dark">
      <form method="post">
        <h2 className="sr-only">Login Form</h2>

        <div className="illustration">
          <i className="icon ion-ios-locked-outline"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
        <Form.Item name="first_name" rules={[
        {
          required:true,
        },{whitespace:true},{min:4}
        ]} hasFeedback>
        <Input placeholder='type your first name'/>
      </Form.Item>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Log In
          </button>
        </div>
        <a href="#" className="forgot">
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default page;
