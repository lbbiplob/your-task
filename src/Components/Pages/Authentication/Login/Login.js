import { GoogleAuthProvider } from "firebase/auth";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin, emailPasswordLogin } = useContext(AuthContext);

  const handelGoogleLogin = () => {
    console.log(process.env.REACT_APP_apiKey);
    console.log("kal");
    const provider = new GoogleAuthProvider();
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const EmailPasswordLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailPasswordLogin(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:w-1/3 mx-auto p-5">
      <form className="flex flex-col gap-4" onSubmit={EmailPasswordLogin}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            name="email"
            type="email"
            placeholder="name@name.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            name="password"
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="remember">
            If you Don't Have Account Please{" "}
            <Link className="text-cyan-600" to={"/register"}>
              Register
            </Link>{" "}
          </Label>
        </div>
        <Button type="submit">Login</Button>
        <span className="text-center">Or</span>
      </form>
      <Button onClick={handelGoogleLogin} className="w-full mt-2">
        Google Login
      </Button>
    </div>
  );
};

export default Login;
