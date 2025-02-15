import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ title, children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      <h2>{title}</h2>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
