import userContext from "../utils/userContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const { loggedInUser } = useContext(userContext);

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
