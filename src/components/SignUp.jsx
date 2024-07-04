import "./Major.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
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
    }
  });
  validationSchema : validationSchema
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname"  name="fname" value={formik.values.fname} onChange={formik.handleChange}/>
        {formik.errors.fname && <p>{formik.errors.fname}</p>}
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" name="lname"value={formik.values.lname} onChange={formik.handleChange} />
        {formik.errors.lname && <p>{formik.errors.lname}</p>}
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email && <p>{formik.errors.email}</p> }
        <label htmlFor="pword">Password:</label>
        <input type="text" id="pword"name="pword" value={formik.values.pword} onChange={formik.handleChange}/>
        {formik.errors.pword && <p>{formik.errors.pword}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
export default SignUp;
