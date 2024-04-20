import React, { useEffect } from "react";
import Particles from "particles.js";

const FireParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: "#tsparticles",
      sizeVariations: 3,
      color: {
        value: "#ff0000",
      },
      line_linked: {
        enable: false,
      },
      shape: {
        type: "circle",
      },
      move: {
        speed: 1,
      },
    });
  }, []);

  return <div id="tsparticles" />;
};

export default FireParticles;
