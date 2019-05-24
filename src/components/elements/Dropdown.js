import React from 'react';

import styled from 'styled-components';


const Container = styled.div`
    margin-top: 13px;
  `;
  
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleDropdown() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Container className={isActive ? 'is-active dropdown' : 'dropdown'}>
        <div className="dropdown-trigger">
          <div
            className=" has-background-white has-text-black"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.toggleDropdown}
          >
            
            <span className="icon is-medium">
              <i className="fas fa-ellipsis-h  is-size-4" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="dropdown-menu " id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Dropdown item
            </a>
            <a className="dropdown-item">Other dropdown item</a>
            <a href="#" className="dropdown-item ">
              Active dropdown item
            </a>
            <a href="#" className="dropdown-item">
              Other dropdown item
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </Container>
    );
  }
}
