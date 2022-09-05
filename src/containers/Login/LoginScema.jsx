import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const nameRules= /^[a-zA-Z]+$/;
const emailRules=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export const validationSchema = yup.object().shape({
    email: yup.string().required("User Emailid is required").matches(emailRules,"Invalid email address"),
    password: yup.string().min(6, "please Enter minimum six character").required("User Emailid is required").matches(passwordRules, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."),
});
