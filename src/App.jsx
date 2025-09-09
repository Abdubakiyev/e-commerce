import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Properties from "./page/Properties"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App