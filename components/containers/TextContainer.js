import styled from "styled-components"

const Container = styled.div`
  width: 50%;
  padding: 10%;
  position: relative;
`
const TextBox = styled.div`

`


export default function TextContainer({props}) {
  return (
    <Container>
      <TextBox>
        <p>{props}</p>
      </TextBox>
    </Container>
  )
}
