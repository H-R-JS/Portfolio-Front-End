import React, { useRef } from "react";

export const ModalHome = ({ show, onClose }) => {
  const ref = useRef();

  function toggleClose(e) {
    if (e.target !== ref.current) {
      onClose();
    }
  }

  if (!show) {
    return null;
  }

  return (
    <div onClick={toggleClose} className="modal-overlay">
      <div ref={ref} className="modal-home">
        <p>
          Self-taught and passionate, I design high-performing and aesthetic web
          applications, proficient in front-end (React.js, SASS, JavaScript) and
          back-end (Node.js, MongoDB, MySQL). Rigorous, creative, and flexible,
          I use tools like VS Code, Figma, and NPM to deliver effective
          solutions. Seeking an apprenticeship to deepen my skills and innovate.
        </p>
      </div>
    </div>
  );
};
