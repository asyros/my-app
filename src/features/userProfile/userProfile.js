import { useAuth } from "../../context/AuthContext";
import { Nav } from "../nav";

export const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Nav />
      <h2>User Profile Page</h2>
      <p>Welcome, {user ? user.username : "Guest"}!</p>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};
