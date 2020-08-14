import styled from 'styled-components/native';

import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const barHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  padding: 24px;
  padding-top: ${barHeight + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity``;

const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export { Container, Header, BackButton, HeaderTitle, UserAvatar };
