const { createContext } = require("react");

const userContext = createContext({
  loggedInUser: "Default User",
});

export default userContext;