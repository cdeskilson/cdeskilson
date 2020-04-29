import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

function isWorkPage() {
  if (typeof window === "undefined") return false
  return window.location.pathname.includes("work")
}

function isCvPage() {
  if (typeof window === "undefined") return false
  return window.location.pathname.includes("cv")
}

const Header = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 30px;
  letter-spacing: 1px;
  text-align: center;
  @media only screen and (max-width: 736px) {
    font-size: 28px;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 18px 0 40px 0;
`

const Padding = styled.div`
  margin-right: 20px;
`

const NavItemLink = styled(Link)<{ selected: boolean }>`
  font-size: 14px;
  color: black;
  text-decoration: none;
  border-bottom: ${({ selected }) => (selected ? "0.5px solid black" : "none")};
  padding-bottom: ${({ selected }) => (selected ? "0.1em" : "0")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`
const NavItem = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`

export default function Navbar() {
  const workPage = isWorkPage()
  const cvPage = isCvPage()
  return (
    <Fragment>
      <Header>CD ESKILSON</Header>
      <NavContainer>
        <NavItemLink to="/" selected={!workPage && !cvPage}>
          about
        </NavItemLink>
        <Padding />
        <NavItemLink to="/work/" selected={workPage}>
          work
        </NavItemLink>
        <Padding />
        {/* <NavItemLink to="/work/" selected={cvPage}>
          cv
        </NavItemLink> */}
        <Padding />
        <NavItem href="https://twitter.com/cdeskilson" target="_blank">
          <i className="fa fa-twitter" />
        </NavItem>
      </NavContainer>
    </Fragment>
  )
}
