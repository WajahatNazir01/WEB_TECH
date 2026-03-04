import React from 'react';
import Container from '../../../components/layout/Container';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;