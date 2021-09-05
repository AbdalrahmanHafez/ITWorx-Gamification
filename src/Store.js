import React, { useState } from "react";
const initialState = {
  msalInstance: null,
};
export const AuthContext = React.createContext();

const Store = ({ children }) => {
  const [auth, setauth] = useState(initialState);
  return (
    <AuthContext.Provider value={[auth, setauth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default Store;
