import { MENU_URL } from "../utils/constants";
import { useState } from "react";

export default useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json?.data);
  }
};
