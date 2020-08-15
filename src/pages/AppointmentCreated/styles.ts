import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 42px;
  color: #f4ede8;
  text-align: center;
  margin-top: 48px;
`;

const Description = styled.Text`
  font-family: 'Roboto-Slab-Regular';
  font-size: 22px;
  color: #999591;
  margin-top: 16px;
`;

const OkButton = styled(RectButton)`
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;
`;

const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #312e38;
`;

export { Container, Title, Description, OkButton, OkButtonText };
