import "./Major.css";
function Login() {
  return (
    <>
      <form action="post" className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="text" />
        <label htmlFor="email">Password:</label>
        <input type="text" />
        <button>Login</button>
      </form>
    </>
  );
}
export default Login;
