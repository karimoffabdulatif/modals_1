import { Routes, Route } from "react-router-dom"
import Login from "./components/login/login"
import Cars from "./components/cars/cars"
import "./components/modal"
import "./components/single-car/single-car"
import SingleCar from "./components/single-car/single-car"

function App() {

  return (
    <>
     <h1 className="text-center">Welcome to Andijan</h1>
     <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="cars" element={<Cars/>}/>
      <Route path="sinle-cars" element={<SingleCar/>}/>
     </Routes>
    </>
  )
}

export default App
