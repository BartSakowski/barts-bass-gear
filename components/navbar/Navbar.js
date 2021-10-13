import styled from "styled-components"
import Link from 'next/link'

import Navlinks from "./Navlinks"

const Navi = styled.nav`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 80px;
  padding: 0 30px;
  background-color: #323232;
  color: #fff;
  opacity: 0.8;
  display:flex;
  justify-content:space-between;
  transition: 0.5s;

  .nav-logo{
    padding: 0 20px;
    width: 100px;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      height: 80px;
      line-height: 80px;
      vertical-align: middle; 
    }
  }
`
export default function Navbar() {
  return (
    <Navi>
      <div className="nav-logo">
        <Link href='/'>
          Home
        </Link>
        </div>
      <Navlinks />
    </Navi>
  )
}
