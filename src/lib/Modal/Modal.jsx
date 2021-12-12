import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

/**
 * @param {boolean} show
 * @param {func} close
 * @param {string} closeIcon
 * @param {string} title
 * @param {node} children
 * @returns {ReactElement}
 */
export default function Modal({ show, close, closeIcon, title, children }) {
  const modalRef = React.useRef();

  const keyDownHandler = (e) => {
    if (e.key !== "Tab") return;

    const focusableModalElements = modalRef.current.querySelectorAll(
      "a[href], button:not([disabled]), textarea, input, select"
    );

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  const keyListenersMap = new Map([
    [27, close],
    [9, keyDownHandler],
  ]);

  React.useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  return (
    <div
      className={`${styles.overlay} ${show ? styles.show : ""} `}
      onClick={() => close()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <button className={styles.close} onClick={() => close()}>
          {closeIcon ? (
            <img className={styles.closeContent} src={closeIcon} alt="close" />
          ) : (
            <span className={styles.closeContent}>❌</span>
          )}
        </button>
        {children ? children : null}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  closeIcon: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
