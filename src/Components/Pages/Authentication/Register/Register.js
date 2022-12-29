import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { emailPasswordRegister, updateUserDetails } = useContext(AuthContext);
  const EmailPasswordRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, password);
    emailPasswordRegister(email, password)
      .then((result) => {
        console.log(result);
        const updateName = {
          displayName: name,
        };
        // user details update on firebase
        updateUserDetails(updateName)
          .then((result) => {
            form.reset();
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="lg:w-1/3 mx-auto p-5">
      <form className="flex flex-col gap-4" onSubmit={EmailPasswordRegister}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text1" value="Your name" />
          </div>
          <TextInput
            id="text1"
            name="name"
            type="text"
            placeholder="Name"
            required={true}
          />
        </div>
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
            If you Have Already Account Please{" "}
            <Link className="text-cyan-600" to={"/login"}>
              Login
            </Link>{" "}
          </Label>
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
