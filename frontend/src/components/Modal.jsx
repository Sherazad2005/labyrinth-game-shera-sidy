const Modal = ({ isOpen, title, message, onClose }) => {
    if (!isOpen) return null;

    return (<div className="modal-backdrop">
        <div className="modal">
            <h2>{title}</h2>
            <p>{message}</p>
            <button onClick={onClose}>OK</button>
        </div>
    </div>
    );
};

export default Modal;