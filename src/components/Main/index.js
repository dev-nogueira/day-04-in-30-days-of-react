import React, { useState } from 'react';
import { Container, Button } from './styles';

function Main() {
  const [active, setActive] = useState(false)
  return (
    <Container DarkMode={active}>
      <Button DarkMode={active} onClick={() => setActive(!active)}>
        {active ? 'DARK MODE 🌑' : 'LIGHT MODE ☀️'}
      </Button>
    </Container>
  );
}

export default Main;