import "./Login.css"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formValues) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3002/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      navigate("/")

    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    Email: Yup.string().email("Invalid format").required("Email is required"),
    Password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (formValues) => {
      handleSubmit(formValues);
    },
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="login-form">
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

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="Password"
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Password && formik.errors.Password && (
          <p className="error">{formik.errors.Password}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
