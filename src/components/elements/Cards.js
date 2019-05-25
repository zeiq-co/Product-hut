import React from 'react'; 
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props=>props.theme.white};
    padding: 2% 2%;
    margin: 1% 0%;
    .title {
        line-height: 2;
    }
    .icons {
    margin-top: 2rem;
    }
`;
const Cards = ({ image, title, subtitle }) => (
  <Container className="">
    <article className="media">
      <figure className="media-left">
        <p className="image is-128x128">
          <img src={image} alt="" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="title is-size-5 has-text-weight-bold has-text-black	is-4">{title}</p>
          <p className="subtitle is-family-monospace	is-6">{subtitle}</p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small"><i className="fas fa-comment-dots" /></span>
            </a>
          </div>
        </nav>
      </div>
      <div className="media-right">
        <span className="icons is-small is-size-2"><i className="icons fas fa-chevron-right" /></span>
      </div>
    </article>
  </Container>
);

export default Cards;
