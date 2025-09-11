import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Properties from "./page/Properties"
import Contact from "./page/Contact"
import Login from "./page/Login"
import Register from "./page/Register"
import Favourite from "./page/Favourite"
import Profile from "./page/Profile"
import MyProperties from "./page/MyProperties"
import AddProperties from "./page/AddProperties"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myproperties" element={<MyProperties />} />
        <Route path="/addproperties" element={<AddProperties />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App