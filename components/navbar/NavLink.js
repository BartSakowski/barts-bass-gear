import styled from "styled-components"
import Link from 'next/link'

const NaviPageLink = styled.li`
  height: 80px;
  line-height: 80px;
  width: 100px;
  padding: 0 20px;
  list-style-type: none;

  a {
    text-decoration: none;
    color: inherit;
  }

`


export default function NavLink({link, text}) {
  return (
    <NaviPageLink>
      <Link href={link}>
        {text}
      </Link>
    </NaviPageLink>
  )
}
