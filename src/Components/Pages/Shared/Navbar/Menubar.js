import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  console.log(user);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar alt="User settings" img={user?.photoURL} rounded={true} />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            {user?.uid && (
              <Dropdown.Item onClick={handelLogout}>Sign out</Dropdown.Item>
            )}
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>Home</Link>
          <Link to={"/addtask"}>Add Task</Link>
          <Link to={"/mytask"}>My Task</Link>
          <Link to={"/"}>Complete Task</Link>
          <Link to={"/login"}>Login</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
