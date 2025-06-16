import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import styled from '@emotion/styled';

let StyledBrand = styled.div`
  color: white;
`

function App() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <StyledBrand>
              JuWanna Darts
            </StyledBrand>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
