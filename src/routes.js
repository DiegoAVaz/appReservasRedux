import React from "react";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";
import { Route, Routes } from "react-router-dom";

export default function Router(){
    return(

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>

    )
}