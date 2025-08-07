import Button from "./Button";

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Thank you for your feedback!</h3>
        <p>
          You rated this {rating} star{rating > 1 ? "s" : ""} out of 5.
        </p>
        <Button className="close-btn" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
