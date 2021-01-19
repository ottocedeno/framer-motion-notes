import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article style={{ border: "1px solid black", padding: "10px" }}>
      <h2
        role="button"
        onClick={() => setIsToggled((prevState) => !prevState)}
        style={{ cursor: "pointer" }}
      >
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden" }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              Hey there how's it going over on the other side of the Universe?
              Can you hear us? We need some help!!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
