import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an api call and send username and password
    const data = {
      name: "Ayush Porwal",
    };
    setUserName(data.name);
  });

  return (
    <userContext.Provider value={{ loggedInUser: "Ayush Porwal" }}>
      <>
        <Header />
        <Outlet />
      </>
    </userContext.Provider>
  );
}
