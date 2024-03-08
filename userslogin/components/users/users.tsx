import React from 'react'
import './users.css'
// import { useFormik } from 'formik';
// import * as Yup from 'yup'

function Users() {
    // const usersForm = Yup.object().shape({
    //     username: Yup.string()
    //       .min(2, 'Too Short!')
    //       .max(50, 'Too Long!')
    //       .required('Required'),
    //     email: Yup.string()
    //       .min(2, 'Too Short!')
    //       .max(50, 'Too Long!')
    //       .required('Required'),
    //     mobile_no: Yup.string().email('Invalid email').required('Required'),
    //   });
    //   const formik = useFormik({
    //     initialValues: {
    //       username: "",
    //       email: "",
    //       mobile_no: "",
          
    //     },
    //     validationSchema: usersForm,
    //     onSubmit: (values, { resetForm }) => {
    //       console.log(values);
    //         resetForm();
    //     },
    //   });

  return (
    
<div className="wrapper">
    {/* add ui design functionalitysss */}
    
        <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
            Users Form ui designs
            placeholder changes
        </div>
        <form className="p-3 mt-3" >
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="lastName" id="lastName" placeholder="lastName" />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="text" name="mobile_no" placeholder="Mobile_no" />
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        {/* <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div> */}
    </div>
  )
}

export default Users;
