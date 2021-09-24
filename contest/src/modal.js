import React from 'react';
import { Link } from "react-router-dom";


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
                <Link to="/">Home</Link>
                <Link to="/contest">Contests</Link>
          <Link to="/login">Login</Link>
          <button>  <Link to="/signup">Sign Up</Link> </button>
        </section>
      </div>
    );
};
  
export default Modal;