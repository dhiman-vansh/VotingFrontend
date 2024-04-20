import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import particlesOptions from "./Confetti.json";
import CardComp from "./CardComp";

export default function Results() {

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
          const response = await fetch("https://votingbackend-1mcc.onrender.com/results");
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
      <h1 style={{zIndex:1 , color:"white"}}>Result is</h1>
      <CardComp
            key={data._id}
            sr={data.srNo}
            name={data.name}
            desc={data.description}
            img={data.img}
          />
    </>
  );
}
