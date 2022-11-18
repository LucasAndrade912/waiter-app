import styled from 'styled-components/native'

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  top: 24px;
`

export const ModalBody = styled.View`
  background-color: #FAFAFA;
  flex: 1;
  padding: 32px 24px 0;
`

export const Header = styled.View`
  margin-bottom: 32px;
`

export const IngredientsContainer = styled.View`
  flex: 1;
`

export const Ingredient = styled.View`
  flex-direction: row;
  padding: 16px;
  border: rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  align-items: center;
  margin-bottom: 4px;
`

export const Footer = styled.View`
  min-height: 110px;
  background-color: #FFF;
  padding: 16px 24px;
`

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.View``