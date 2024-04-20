import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Appbar from "./Appbar";
import CardComp from "./CardComp";
// import FireParticles from "./ParticleBg";

function App() {
  const [init, setInit] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      try {
        const response = await fetch("https://votingbackend-1mcc.onrender.com/");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);



  return (
    <div className="App">
      {/* <FireParticles /> */}
      <Particles options={particlesOptions} />
      <Appbar />
      <h3>Candidates for Mr. Fresher : </h3>
      <div className="CardContainer">
        {data.map((item, index) => (
          <CardComp
            key={index}
            sr = {item.srNo}
            name={item.name}
            desc={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
