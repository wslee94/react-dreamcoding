import { createContext, useEffect, useState, useContext } from "react";
import { onAuthChanged } from "../firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthChanged((user) => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
