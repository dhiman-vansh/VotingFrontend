import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import particlesOptions from "./Confetti.json";
import CardComp from "./CardComp";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Results() {
  const [init, setInit] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      try {
        const response = await fetch(
          "https://votingbackend-1mcc.onrender.com/results"
        );
        const data = await response.json();
        setData(data);
        if (init) {
          return;
        }

        initParticlesEngine(async (engine) => {
          await loadFull(engine);
        }).then(() => {
          setInit(true);
        });
        console.log("data is " + data.sr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Particles options={particlesOptions} />
      <h1 style={{ zIndex: 1, color: "#F0EDCF" }}>And the winner is :</h1>
      <div className="CardContainerResult">
        <CardComp
          // key={item._id}
          // sr={item.srNo}
          name={data.name}
          // desc={data.description}
          img={data.img}
          vote={"false"}
        />
        <h1 style={{ color: "#F0EDCF" }}>
          Candidate won by : <br></br>
          {data.percentageWin}% votes
        </h1>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={data.percentageWin} />
        </Box>
      </div>
    </>
  );
}
