import React from 'react';

const Modal = ({ close, children }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={close} />
    <div className="modal-content">
      <div className="box">
        {children}
      </div>
    </div>
    <button className="modal-close" onClick={close} />
  </div>
);

export default Modal;
