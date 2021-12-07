import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

/**
 * @param {boolean} show
 * @param {func} close
 * @param {string} iconClose
 * @param {string} title
 * @param {node} children
 * @returns {ReactElement}
 */
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

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  iconClose: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
