import Header from "./Header";
import { Outlet } from "react-router-dom";



export default function AppLayout() {
  return (
    <userContext.Provider value={{ loggedInUser: "Ayush Porwal" }}>
      <>
        <Header />
        <Outlet />
      </>
    </userContext.Provider>
  );
}
