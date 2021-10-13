import styled from "styled-components"

const FooterContainer = styled.footer`
  width: 100vw;
  height: 80px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #323232;
  color: #fff;
`
export default function Footer() {
  return (
    <FooterContainer>
      Bart Sakowski © 2021
    </FooterContainer>
  )
}
