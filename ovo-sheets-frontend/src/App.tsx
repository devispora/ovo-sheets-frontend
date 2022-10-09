import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faker } from '@faker-js/faker';
import { OvOStaffForm } from './components/staff-form';
import { Container } from 'react-bootstrap';

function App() {

  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');


  return (
    <div>
      <Container >
        <OvOStaffForm />
      </Container>
    </div>
  );
}

export default App;
