import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface IRouteParams {
  dateInUTCTime: number;
}

const AppointmentCreated: React.FC = () => {
  const { params } = useRoute();
  const { dateInUTCTime } = params as IRouteParams;

  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const appointmentDetail = useMemo(() => {
    return format(
      dateInUTCTime,
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH'h'",
      {
        locale: ptBR,
      },
    );
  }, [dateInUTCTime]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>

      <Description>{appointmentDetail}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
