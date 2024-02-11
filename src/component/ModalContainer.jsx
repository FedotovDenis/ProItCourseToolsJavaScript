import { useState } from 'react';
import Modal from './Modal';

export default function ModalContainer() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleConfirm() {
    setShowConfirm(false);
  }

  function handleError() {
    setShowError(false);
  }

  function handleInfo() {
    setShowInfo(false);
  }

  return (
    <div>
      <button onClick={() => setShowConfirm(true)}>Confirm Action</button>
      <button onClick={() => setShowError(true)}>Show Error</button>
      <button onClick={() => setShowInfo(true)}>Show Info</button>
      {showConfirm && (
        <Modal
          title="Your order has been confirmed"
          message="Expect"
          onClose={handleConfirm}
        />
      )}
      {showError && (
        <Modal
          title="Error"
          message="Something went wrong. Please try again later."
          onClose={handleError}
        />
      )}
      {showInfo && (
        <Modal
          title="Information for you"
          message="Thank you for choosing us"
          onClose={handleInfo}
        />
      )}
    </div>
  );
}
