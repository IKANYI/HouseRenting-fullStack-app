import "./Major.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("");
  const handleSubmit = async (formValues) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch('http://localhost:3002/details', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues)
      });
      console.log(response);
    }catch (e) {
      setError(e.message);
    }
  }
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().email("invalid format").required("Email is required"),
    pword: Yup.string().required(" Password is required"),
  })
  const formik = useFormik({
    initialValues: {
       fname:"",
       lname:"",
       email:"",
       pword:"",

    },
    onSubmit: (formState) => {
     console.log(formState);
    },
    validationSchema : validationSchema,
    onSubmit:(formValues) => {
      console.log(formValues);
      handleSubmit(formValues);
    }
  });
  
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname"  name="fname" value={formik.values.fname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.fname && formik.errors.fname && <p>{formik.errors.fname}</p>}
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname"value={formik.values.lname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.lname && formik.errors.lname && <p>{formik.errors.lname}</p>}
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p> }
        <label htmlFor="pword">Password:</label>
        <input type="text" id="pword"name="pword" value={formik.values.pword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.pword && formik.errors.pword && <p>{formik.errors.pword}</p>}
        <button type="submit" disabled={loading}>{loading? 'please wait...':'Sign Up'}</button>
      </form>
    </>
  );
}
export default SignUp;
