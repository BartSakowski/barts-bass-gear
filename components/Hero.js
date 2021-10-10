import Image from 'next/image'


import styled from "styled-components"

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 1050px;

  img {
    object-fit: cover;

  }

  
  
`

const HeroTextBlock = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  z-index: 99;
  position: absolute;
  padding: 50vh 0;

 



`


export default function Hero() {
  return (
    <HeroContainer>
      <Image 
        src='/hero-img.jpg'
        layout='fill'

      />
      <HeroTextBlock>

        <h1>Bart Sakowski</h1>
        <h3>Developer By Day</h3>
        <h3>Bass Player By Every Other Time</h3>
        <h4>(unless I'm coding)</h4>

      </HeroTextBlock>
    </HeroContainer>
  )
}
