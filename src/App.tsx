import { animated, useSpring } from "@react-spring/web";

import { useAppStore } from "./store";
import { Modal } from "./Modal";

function App() {
  const { setOpen } = useAppStore();
  const handleOpen = () => {
    setOpen(true);
  };
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 400 },
  });

  return (
    <div className="App">
      <h1>Framer modal</h1>
      <div>
        <button onClick={handleOpen}>Open modal</button>
      </div>
      <Modal />
      <animated.div style={{ ...springs }}>hello world</animated.div>
    </div>
  );
}

export default App;
