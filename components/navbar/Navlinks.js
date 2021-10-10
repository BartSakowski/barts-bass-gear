import styled from "styled-components"

import NavLink from "./NavLink"


const NaviLinks = styled.ul`
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 200px;
  text-align: center;
  text-decoration: none;
`


export default function Navlinks() {
  return (
    <NaviLinks>
      <NavLink link='google.com/' text='Projects'></NavLink>
      <NavLink link='yahoo.com/' text='Gear'></NavLink>

    </NaviLinks>
  )
}
