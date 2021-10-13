import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
  width: 50%;
  position: relative;
`


export default function ImageContainer({img, alt}) {
  // const img = props.image
  return (
    <Container>
      {console.log(img)}
      <Image 
        src={img}
        alt={alt}
        layout='fill'
        objectFit='contain'
      />
    </Container>
  )
} 
