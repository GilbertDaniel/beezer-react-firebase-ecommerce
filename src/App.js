import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigaton";
import Authentication from "./routes/authentication/Authentication";
import { UserContext } from './context/UserContext';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => { 

  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
      </Route>
    </Routes>
  );
  
};

export default App;