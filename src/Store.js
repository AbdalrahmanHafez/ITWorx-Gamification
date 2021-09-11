import React, { useState, useRef } from "react";
const initialState = {
  authed: false,
  isAdmin: false,
  points: 0,
  practiceName: "",
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
