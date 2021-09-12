import React, { useState } from "react";
const initialState = {
  authed: false,
};

export const UserContext = React.createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(initialState);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;