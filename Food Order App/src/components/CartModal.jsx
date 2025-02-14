import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function CartModal({ title, children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    console.log("modal rendered");
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
      {/* <form method="dialog" className="modal-actions">
        {actions}
      </form> */}
    </dialog>,
    document.getElementById("modal")
  );
}
