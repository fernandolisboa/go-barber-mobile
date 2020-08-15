import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { RectButton } from 'react-native-gesture-handler';

import { IProvider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface IHourProps {
  selected: boolean;
  available: boolean;
}

interface IHourTextProps {
  selected: boolean;
}

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity``;

const HeaderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin-left: 16px;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

const Content = styled.ScrollView``;

const ProvidersListContainer = styled.View`
  height: 112px;
`;

const ProvidersList = styled(FlatList as new () => FlatList<IProvider>)`
  padding: 32px 24px;
`;

const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${({ selected }) => (selected ? '#ff9000' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
`;

const Calendar = styled.View``;

const CalendarTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 0 24px 24px;
`;

const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;

const Schedule = styled.View`
  padding: 24px 0 16px;
`;

const ScheduleTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin: 0 24px 24px;
`;

const Section = styled.View`
  margin-bottom: 24px;
`;

const SectionTitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
`;

const SectionContent = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;

const Hour = styled(RectButton)<IHourProps>`
  padding: 12px;
  background: ${({ selected }) => (selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;
  opacity: ${({ available }) => (available ? 1 : 0.3)};
`;

const HourText = styled.Text<IHourTextProps>`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
`;

export {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  Content,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendar,
  CalendarTitle,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  ScheduleTitle,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
};
