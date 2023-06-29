import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

import Users from "./Components/Users";
import Product from "./Components/Product";
import "./css/sb-admin-2.css";
import CreateUser from "./Components/CreateUser";
import Login from "./Components/Login";
import Portal from "./Components/Portal";
import Userview from "./Components/Userview";
import EditUser from "./Components/EditUser";
import { UserProvider } from "./UserContext";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users/:id" element={<Userview />} />
            <Route path="user/edit/:id" element={<EditUser />} />
            <Route path="creat-user" element={<CreateUser />} />
            <Route path="product" element={<Product />} />
          </Route>
          {/* <Product /> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
