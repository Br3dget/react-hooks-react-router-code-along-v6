import React from "react";
import { UserProvider } from "./context/UserContext";
import UserCard from "./components/UserCard";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Welcome to the App</h1>
        <UserCard />
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;


