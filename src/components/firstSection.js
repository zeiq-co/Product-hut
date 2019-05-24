import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

export default class FirstSection extends React.Component {
  render() {
    return (
      <Container>
        <div className="columns">
          <div className="column is-three-fifths">
            First column
          </div>
          <div className="column">
            Second column
          </div>
        </div>
      </Container>
    );
  }
}
