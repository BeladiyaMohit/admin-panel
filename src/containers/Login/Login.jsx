import React, { useEffect } from "react";
import { Logincss } from "../../asset/LoginCss";
import { useFormik } from "formik";
import { validationSchema } from "./LoginScema";
import { useNavigate } from "react-router-dom";
// import AuthService from "../Services/AuthService";
import * as UrlConstant from "../Constant/Constant";
import { LoginAction } from "../../Redux/Actions/LoginAction";
import { useDispatch, useSelector } from "react-redux";

export const NewLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const responce= LoginAction()
  // async function handleLogin  (values) {
  //     let response = await AuthService.Login(values)
  //     if (response.status === UrlConstant.SUCCESS_CODE) {
  //         console.log("response.message:: ", response.message);
  //         // message.success(response.message)
  //         sessionStorage.setItem("userAccessToken", response.data.token)
  //     }
  //     else {
  //         // console.log("response.message:: ", response.message);
  //         // message.error(response.message)
  //         // setLoading(false)
  //     }
  // }
  // const {data}=responce.

  const { data, status, message } = useSelector((Store) => Store.LoginReducer);
  
  useEffect(()=>{
    if (status === 1) {
      sessionSeter();
    }
  },[status])

  const handleLogin = (values) => {
    dispatch(LoginAction(values));
  };

  const sessionSeter=()=>{
    sessionStorage.setItem("userAccessToken", data.token);
    navigate("/dashbord");
}


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        handleLogin(values);
      },
      validationSchema: validationSchema,
    });

  return (
    <>
      <Logincss>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="inputFilde">
            <div className="heading">
              <h1>Log In</h1>
            </div>
            <div className="emailid">
              <input
                onBlur={handleBlur}
                className={
                  touched.email && errors.email
                    ? "myerror"
                    : touched.email
                    ? "successfull"
                    : ""
                }
                onChange={handleChange}
                value={values.email}
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              {errors.email && touched.email && (
                <p className="errorString">{errors.email}</p>
              )}
            </div>
            <div className="newpassword">
              <input
                onBlur={handleBlur}
                className={
                  touched.password && errors.password
                    ? "myerror"
                    : touched.password
                    ? "successfull"
                    : ""
                }
                onChange={handleChange}
                value={values.password}
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              {errors.password && touched.password && (
                <p className="errorString">{errors.password}</p>
              )}
            </div>
            <div className="submitbtn">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </Logincss>
    </>
  );
};
