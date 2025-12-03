import React from "react";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={() => login({ username, password })}>Log In</button>
    </div>
  );
};
