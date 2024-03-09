"use client"
import React from 'react'
import { Button, Checkbox, Form, Input,DatePicker,Select } from 'antd';
const page = () => {


  function submitForm(values: any): void {
    console.log(values,'here form value')
    localStorage.setItem("user_form",JSON.stringify(values) )
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      {/* <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" /> */}


    <Form onFinish={submitForm}>
      
      <Form.Item label='first name' name="first_name" rules={[
        {
          required:true,
        },{whitespace:true},{min:4}
        ]} hasFeedback>
        <Input placeholder='type your first name'/>
      </Form.Item>
      
      <Form.Item label='Last name' name="last_name" rules={[
        {
          required:true,
        },{whitespace:true},{min:4}
        ]} hasFeedback>
        <Input placeholder='type your Last name'/>
      </Form.Item>
      
      <Form.Item label='email' name="email" rules={[
        {
          required:true,
        },{type:"email"}
        ]} hasFeedback>
        <Input placeholder='type your email'/>
      </Form.Item>
      
      <Form.Item label='password' name="password" rules={[
        {
          required:true,
        }
        ]} hasFeedback>
        <Input.Password placeholder='type your password'/>
      </Form.Item>
      
      <Form.Item label='confirm password' name="confirmpassword" rules={[
        {
          required:true,
        },({getFieldValue})=>({
          validator(_,value){
            if(!value || getFieldValue('password')=== value){
              return Promise.resolve()
            }
            return Promise.reject('password does not match')
          }
        })
        ]} hasFeedback>
        <Input.Password placeholder='type your confirm password'/>
      </Form.Item>

      <Form.Item >
        <Button type='primary' htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>

    </div>
  )
}

export default page
