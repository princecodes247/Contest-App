import React, { useState } from "react";
import Modal from './modal.js';


const Header = () => {

  
  const handleModal = () => {
    setShowModal(!ShowModal)
  }
  const [ShowModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <header>
      <h1>Rank247</h1>

      <ul className="hidden-sm">
        <li class="active"> <a href="/">Home</a></li>
        <li> <a href="/contest">Contests</a></li>
      </ul>

      <ul>
        <b onClick={ handleModal}className="hidden-lg hidden-md fa fa-bars"></b>
          <Modal show={ShowModal} handleClose={handleModal}>
          </Modal>
        <li className="hidden-sm"><a href="/login">Login</a></li>
        <li class="sign-up hidden-sm"> <a href="/signup">Sign Up</a></li>
      </ul>
    </header>
    </React.Fragment>
  );
};

export default Header;
