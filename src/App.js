import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const login = useSelector((state) => state.auth.login);

  return (
    <React.Fragment>
      <Header />
      {login && <UserProfile />}
     {!login && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
