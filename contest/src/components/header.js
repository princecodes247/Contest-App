import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from './modal.js';


const Header = () => {

  
  const handleModal = () => {
    setShowModal(!ShowModal)
  }
  const [ShowModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <header>
      <h1><Link to="/">Rank247</Link></h1>

      <ul className="hidden-sm">
        <li class="active"> <Link to="/">Home</Link></li>
        <li> <Link to="/contest">Contests</Link></li>
      </ul>

      <ul>
        <b onClick={ handleModal}className="hidden-lg hidden-md fa fa-bars"></b>
          <Modal show={ShowModal} handleClose={handleModal}>
          </Modal>
        <li className="hidden-sm"><Link to="/login">Login</Link></li>
        <li class="sign-up hidden-sm"> <Link to="/signup">Sign Up</Link></li>
      </ul>
    </header>
    </React.Fragment>
  );
};

export default Header;
