import styled, { css } from 'styled-components'

export const Logincss=styled.div`
margin: 0;
padding: 0;

height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  form {
    align-self: center;
    .heading {
      display: flex;
      margin: 5px;
      justify-content: center;
      span {
        font-size: 50px;
        margin: 15px 0px;
        display: flex;
        padding: 5px;
      }
      h1 {
        padding: 5px;
        display: flex;
      }
    }
    .inputFilde {
      text-align: center;
      box-sizing: border-box;
      .username,
      .emailid,
      .confirmpassword,
      .newpassword {
        height: 100px;
        box-sizing: border-box;
        .successfull{
          outline: none !important;
          border: 2px solid #329257bb !important;
          box-shadow: 0px 0px 10px 0px #9df8c0bc;
        }
        input {
          box-sizing: border-box;
          border-radius: 10px;
          border: 2px solid #060606 !important;
          box-shadow: 0px 0px 10px 0px #878787;
          width:320px;
          height:50px;
          font-size: 16px;
          padding-left: 0.5vw;
          padding-right: 0.5vw;
          transition: all 0.25s ease;
        }
        .myerror {
          outline: none !important;
          border: 2px solid red !important;
          box-shadow: 0px 0px 10px 0px #ffa3a3be;
        }
        input:focus {
          width: 17.1vw;
          outline: none !important;
          border: 2.2px solid #b1b1b1 !important;
          box-shadow: 0px 0px 10px 0px #979797bd;
        }

        .errorString {
          color: red;
          text-align: start;
          margin-top: 2px;
          width: 300px;
          font-size: 13.5px;
        }
      }
    
      .submitbtn {
        button {
          background-color: black;
          color: white;
          width: 300px;
          height: 50px;
          font-size:15px;
          border-radius: 14px;
          margin-top: 20px;
        }
      }
    }
  }
`