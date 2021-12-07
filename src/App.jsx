import React, { useState } from "react";
import { Modal } from "./lib";
import "./App.css";

/**
 * Modal component rendering example
 * @returns {ReactElement}
 */
function App() {
  const [modal, setModal] = useState(false);
  const trigger = () => setModal(!modal);

  return (
    <>
      <button className="click-me" onClick={() => trigger()}>
        Click me
      </button>

      <Modal show={modal} close={trigger} title="Dynamic title">
        <p>Modal content with children</p>
      </Modal>
    </>
  );
}

export default App;
