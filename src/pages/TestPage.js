import { React, useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../Store";
import AlertMsg from "../components/AlertMsg";

const TestPage = () => {
  const [user, setUser] = useContext(UserContext);
  const [alertOpen, setalertOpen] = useState(false);

  const testButton = (setUser) => {
    setalertOpen(true);
    setTimeout(() => {
      setalertOpen(false);
    }, 1000);
  };

  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <button onClick={() => testButton(setUser)}> test</button>
      <AlertMsg open={alertOpen} setOpen={setalertOpen} />
    </>
  );
};

export default TestPage;
