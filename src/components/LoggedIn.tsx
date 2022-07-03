import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const LoggedIn = () => {
  const handleLogin = () => {
    setUser({ name: "John", email: "Doe" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  const [, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default LoggedIn;
