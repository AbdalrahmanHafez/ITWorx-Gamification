import { React, useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../Store";

const testButton = (setUser) => {
  console.log("click");
  setUser({ authed: true });
};

const TestPage = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <button onClick={() => testButton(setUser)}> test</button>
    </>
  );
};

export default TestPage;
