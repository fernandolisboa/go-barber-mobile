import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const AppointmentCreated: React.FC = () => {
  const { user, signOut } = useAuth();

  return <Container />;
};

export default AppointmentCreated;
