import React, { useState } from "react";
import { Modal } from "./lib";
import closeIcon from "./assets/close-icon.svg";
import "./App.css";

/**
 * Modal component rendering
 * Minimal and custom example available
 * @returns {ReactElement}
 */
function App() {
  const [modal, setModal] = useState(false);
  const trigger = () => setModal(!modal);

  return (
    <>
      <button className="trigger-modal" onClick={() => trigger()}>
        Custom modal
      </button>
      <Modal
        show={modal}
        close={trigger}
        closeIcon={closeIcon}
        title="Custom modal"
      >
        <div>
          <p className="modal__subtitle">
            Example of modal content with children and icon
          </p>
          <div className="modal__form">
            <input
              className="modal__form-input modal__form-input--first-name"
              type="text"
              placeholder="First name"
            />
            <input
              className="modal__form-input modal__form-input--last-name"
              type="text"
              placeholder="Last name"
            />
            <input
              className="modal__form-input modal__form-input--zip-code"
              type="number"
              placeholder="Zip code"
            />
            <input
              className="modal__form-input modal__form-input--department"
              type="text"
              placeholder="Department"
            />
            <button className="modal__form-button">Submit</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
