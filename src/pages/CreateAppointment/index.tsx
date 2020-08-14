import React, { useCallback, useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
} from './styles';

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

interface IRouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user, signOut } = useAuth();

  const route = useRoute();
  const routeParams = route.params as IRouteParams;

  const { goBack } = useNavigation();

  const [providers, setProviders] = useState<IProvider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(
    routeParams.providerId,
  );

  const navigateBack = useCallback(() => goBack(), [goBack]);

  const handleSelectProvider = useCallback(
    (providerId: string) => setSelectedProvider(providerId),
    [],
  );

  useEffect(() => {
    api.get<IProvider[]>('providers').then(({ data }) => setProviders(data));
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>

      <ProvidersListContainer>
        <ProvidersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { id, name, avatar_url } }) => (
            <ProviderContainer
              selected={id === selectedProvider}
              onPress={() => handleSelectProvider(id)}
            >
              <ProviderAvatar source={{ uri: avatar_url }} />

              <ProviderName selected={id === selectedProvider}>
                {name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>
    </Container>
  );
};

export default CreateAppointment;
