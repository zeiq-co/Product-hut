import React from 'react'; 
import styled from 'styled-components';

const Container = styled.div`
   .media-content {
    padding: 9% 0% 10% 0%;
   }
   .title {
    line-height: 2;
   }
   .card {
       :hover {
        box-shadow: 0 5px 15px rgba(37,37,37,.3);
       }
   }
`;
const Cards = ({ image, title, subtitle }) => (
    <Container className="">
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="" />
                </figure>
            </div>
            <div className="media-content has-text-centered	">
                <p className="title is-size-5 has-text-weight-bold has-text-black	is-4">{title}</p>
                <p className="subtitle is-family-monospace	is-6">{subtitle}</p>
            </div>
        </div>
    </Container>
);

export default Cards;
