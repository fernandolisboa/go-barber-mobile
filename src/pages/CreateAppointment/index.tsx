import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
} from './styles';

interface IRouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user, signOut } = useAuth();

  const route = useRoute();
  const { providerId } = route.params as IRouteParams;

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => goBack(), [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
