import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ show, close, iconClose, title, children }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${show ? styles.show : ""} `}
        onClick={() => close()}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {title ? <h2>{title}</h2> : null}
          <button onClick={() => close()}>
            {iconClose ? <img src={iconClose} alt="close" /> : <span>❌</span>}
          </button>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </>
  );
}
