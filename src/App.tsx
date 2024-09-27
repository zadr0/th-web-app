import React from 'react';
import { Routes, Route } from "react-router-dom"
import components from "./structures/components"

function App() {
  return (
    <div className="">
      <components.Navbar />
      <Routes>
        <Route path="/">
          <Route path="svo" element={<components.Main />} />
          <Route path=":id" element={<components.Second />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
