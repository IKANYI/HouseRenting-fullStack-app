import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import './Signup.css'; // Import the CSS file

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formValues) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3002/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data); // Handle data as needed
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    FirstName: Yup.string().required("First name is required"),
    LastName: Yup.string().required("Last name is required"),
    Email: Yup.string().email("Invalid format").required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formValues) => {
      handleSubmit(formValues);
    },
  });

  return (
    <div className="signup-container">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h2 className="form-header">Sign Up</h2>

        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="FirstName"
          value={formik.values.FirstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.FirstName && formik.errors.FirstName && (
          <p className="error">{formik.errors.FirstName}</p>
        )}

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="LastName"
          value={formik.values.LastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.LastName && formik.errors.LastName && (
          <p className="error">{formik.errors.LastName}</p>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Email && formik.errors.Email && (
          <p className="error">{formik.errors.Email}</p>
        )}

        <label htmlFor="pword">Password:</label>
        <input
          type="password"
          id="pword"
          name="Password"
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Password && formik.errors.Password && (
          <p className="error">{formik.errors.Password}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Sign Up"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;
