import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

export const Squares = () => {
  const [colorsList, setColorsList] = useState(COLORS);

  return (
    <div>
      <button onClick={() => setColorsList(shuffle(colorsList))}>
        Shuffle
      </button>
      {colorsList.map((color) => (
        <motion.div
          style={{ background: color, height: 100, width: 100 }}
          positionTransition={{
            damping: 20,
            stiffness: 50,
            type: "spring",
          }}
          key={color}
        />
      ))}
    </div>
  );
};

export default Squares;
