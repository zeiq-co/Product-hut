import React from 'react';

import styled from 'styled-components';
import Cards from './elements/Cards';
import Heading from './elements/Heading';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  margin-top:1rem;
  `;

const FirstImage ='../images/red.jpeg';

export default class FirstSection extends React.Component {
  render() {
    return (
      <Container>
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths">
              <Heading title="Maker Fastivel" size={3} />
              <Cards
                image={FirstImage}
                title="But wait, why the API edition?"
                subtitle="Over the years, Makers have delighted us and the wider community with products built on our API.
                 We’ve seen Twitter bots, to data analysis to social networks."
              />
              <Heading title="Maker Fastivel" size={3} />
              <Cards
                image={FirstImage}
                title="But wait, why the API edition?"
                subtitle="Over the years, Makers have delighted us and the wider community with products built on our API.
                 We’ve seen Twitter bots, to data analysis to social networks."
              />
              <Cards
                image={FirstImage}
                title="But wait, why the API edition?"
                subtitle="Over the years, Makers have delighted us and the wider community with products built on our API.
                 We’ve seen Twitter bots, to data analysis to social networks."
              />
            </div>
            <div className="column">
            Second column
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
