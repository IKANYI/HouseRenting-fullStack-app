import "./Major.css";
function SignUp() {
  return (
    <>
      <form action="post" className="signup-form">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname" />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" />
        <label htmlFor="pword">Password:</label>
        <input type="text" id="pword" />
        <button>Sign Up</button>
      </form>
    </>
  );
}
export default SignUp;
