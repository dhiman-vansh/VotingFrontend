import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import CardComp from "./CardComp";
import particlesOptions from "./particles.json";


export default function Candidates() {

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
    <>
      <Particles options={particlesOptions} />

      <h3>Candidates for Mr. Fresher : </h3>
      <div className="CardContainer">
        {data.map((item, index) => (
          <CardComp
            key={item._id}
            sr={item.srNo}
            name={item.name}
            desc={item.description}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}
