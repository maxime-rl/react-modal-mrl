import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ show, close, iconClose, title, children }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${show ? styles.show : ""} `}
        onClick={() => close()}
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          <button className={styles.close} onClick={() => close()}>
            {iconClose ? (
              <img
                className={styles.closeContent}
                src={iconClose}
                alt="close"
              />
            ) : (
              <span className={styles.closeContent}>❌</span>
            )}
          </button>
          {children ? <div className={styles.body}>{children}</div> : null}
        </div>
      </div>
    </>
  );
}
