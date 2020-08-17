import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
  margin-top: 56px;
`;

export { Container, Title, BackButton, UserAvatarButton, UserAvatar };
