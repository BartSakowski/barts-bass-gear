import styled from "styled-components"

import TextContainer from "./TextContainer"
import ImageContainer from "./ImageContainer"

const ColumnContainer = styled.div`
  height: 100vh;
  max-height: 1000px;
  display: flex;
  flex-direction: ${props => props.textRight ? "row" : 'row-reverse'};
`

export default function TwoColumnContainer(props) {
  return (
    <ColumnContainer>
    {/* {console.log(props)} */}
      <TextContainer props={props.text}/>
      <ImageContainer img={props.image} alt={props.alt}/>
    </ColumnContainer>
  )
}
