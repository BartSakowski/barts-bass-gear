import styled from "styled-components"

import TwoColumnContainer from "./containers/TwoColumnContainer"

export default function About() {
  return (
    <TwoColumnContainer 
      textRight 
      text={'Hello, my name is Bart Sakowski, I am a web developer and a bass players, this is a website highlighting my bass gear and music projects'}
      image={'/BartSmile.jpg'}
      alt={"It's Bart, but he's smiling?!"}
    
    
    />
  )
}
