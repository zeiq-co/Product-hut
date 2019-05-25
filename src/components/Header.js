import React from 'react';

import styled from 'styled-components';
import Dropdowan from './elements/Dropdown';

const Container = styled.nav`
  background-color: ${props => props.theme.white};
  @media screen and (max-width: 600px) {
    padding: 0rem 0rem !important;
  }
  .field {
    margin: 1rem 0rem;
  }
  .icons {
    margin : 0rem 0.25rem;
    color :  ${props => props.theme.fire};
  }
`;

const Header = () => (
  <Container className="section">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <i className="icons fab fa-product-hunt is-size-1" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="name" placeholder="Discover your next favorite thing..." />
              <span className="icon is-small is-left">
                <i className="fas fa-search" />
              </span>
            </p>
          </div>
          <a className="navbar-item">
        ASK
          </a>

          <a className="navbar-item">
       SHIP
          </a>
          <a className="navbar-item">
        MAKER
          </a>

          <a className="navbar-item">
       JOBS
          </a>

          <a className="navbar-item">
             EVENTS
          </a>
          <Dropdowan />
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-medium has-text-black has-background-white">
             Log in
              </a>
              <a className="button is-medium">
                <strong>Sign up</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Container>
);

export default Header;
