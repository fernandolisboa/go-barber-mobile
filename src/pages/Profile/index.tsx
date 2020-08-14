import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Welcome, Username, Email } from './styles';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 72,
      }}
    >
      <Welcome>Olá, {user.name}</Welcome>
      <Username>Seu username: {user.username}</Username>
      <Email>{user.email}</Email>

      <Button onPress={signOut}>Sair</Button>
    </View>
  );
};

export default Profile;
