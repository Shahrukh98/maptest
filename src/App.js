import React, { useState } from "react";
import logo from './logo.svg';
import dataSet from './dataSet';
import Map from './GoogleMap';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState(false);
  const [areas, setAreas] = useState(dataSet.cities);
  return (
    <div style={{ display: 'flex', height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#000", flexDirection: "column" }}>
      <div style={{ color: "#fff", fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>
        Boundary Mapping and Rendering
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ color: "#fff", backgroundColor: "red", padding: 30, borderRadius: 30, margin: 20 }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
        {toggle ? "Marker" : "Boundary"}
        </div>
        <div
          style={{ color: "#fff", backgroundColor: "red", padding: 30, borderRadius: 30, margin: 20  }}
          onClick={() => {
            setChange(!change);
            if (change) {
              setAreas(dataSet.regions);
            }
            else {

              setAreas(dataSet.cities);
            }
          }}
        >
          {change ? "Cities" : "Regions"}
        </div>
      </div>
      <Map toggle={toggle} areas={areas} />


    </div>
  );
}

export default App;
