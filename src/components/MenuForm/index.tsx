import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Register yourself</span>
        <span className="subtitle">Fill out form right below</span>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Lastname" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button>Continue</button>

        <span className="terms">This page is under privace policy and service terms.</span>
      </Form>
    </Container>
  );
};

export default MenuForm;
