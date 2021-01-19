import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from "./Modal";
import Nav from "./Nav";
import Accordion from "./Accordion";
import "./App.css";
import Menu from "./Menu";
import Squares from "./Squares";
import Slideshow from "./Slideshow";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isToggled, setToggle] = useState(false);

  //Used for the drag card to dismiss example
  const [isCardActive, setIsCardActive] = useState(true);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <Slideshow />
        <Squares />
        <h2>Super Cool</h2>
        <button onClick={() => setToggle(!isToggled)}>Toggle</button>
        <Accordion />
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  onDragEnd={(event, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false);
                    }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{
                    x,
                    opacity,
                    background: "var(--blue)",
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
