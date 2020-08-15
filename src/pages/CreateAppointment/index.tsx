import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Platform } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';

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
  Calendar,
  CalendarTitle,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
} from './styles';

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

interface IAvailabilityItem {
  hour: number;
  available: boolean;
}

interface IRouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();

  const route = useRoute();
  const routeParams = route.params as IRouteParams;

  const [availability, setAvailability] = useState<IAvailabilityItem[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [providers, setProviders] = useState<IProvider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(
    routeParams.providerId,
  );

  const { goBack } = useNavigation();

  useEffect(() => {
    api.get<IProvider[]>('providers').then(({ data }) => {
      setProviders(data);
    });
  }, []);

  useEffect(() => {
    api
      .get<IAvailabilityItem[]>(
        `providers/${selectedProvider}/day-availability`,
        {
          params: {
            day: selectedDate.getDate(),
            month: selectedDate.getMonth() + 1,
            year: selectedDate.getFullYear(),
          },
        },
      )
      .then(({ data }) => setAvailability(data));
  }, [selectedProvider, selectedDate]);

  const navigateBack = useCallback(() => goBack(), [goBack]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChanged = useCallback((_: Event, date?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    date && setSelectedDate(date);
  }, []);

  const dateTimePicker = useMemo(() => {
    return (
      showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChanged}
        />
      )
    );
  }, [showDatePicker, selectedDate, handleDateChanged]);

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
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              onPress={() => handleSelectProvider(provider.id)}
              selected={provider.id === selectedProvider}
            >
              <ProviderAvatar source={{ uri: provider.avatar_url }} />

              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>

      <Calendar>
        <CalendarTitle>Escolha a data</CalendarTitle>

        <OpenDatePickerButton onPress={handleToggleDatePicker}>
          <OpenDatePickerButtonText>
            Selecionar outra data
          </OpenDatePickerButtonText>
        </OpenDatePickerButton>

        {dateTimePicker}
      </Calendar>
    </Container>
  );
};

export default CreateAppointment;
