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
  const [basicModal, setBasicModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);

  const triggerBasicModal = () => setBasicModal(!basicModal);
  const triggerCustomModal = () => setCustomModal(!customModal);

  return (
    <>
      <button className="trigger-modal" onClick={() => triggerBasicModal()}>
        Basic modal
      </button>
      <Modal
        show={basicModal}
        close={triggerBasicModal}
        closeIcon={closeIcon}
        title="Basic modal"
      ></Modal>
      <button className="trigger-modal" onClick={() => triggerCustomModal()}>
        Custom modal
      </button>
      <Modal
        show={customModal}
        close={triggerCustomModal}
        closeIcon={closeIcon}
        title="Custom modal"
      >
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
      </Modal>
    </>
  );
}

export default App;
