import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";

import ButtonLink from "./ButtonLink";

import { Router } from "../utils/Router";
import { Colors } from "../utils/style/Colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const location = useLocation();

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar>
        <NavbarWrapper>
          <NavLink to="/">
            <NavbarBrand
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="Logo"
            />
          </NavLink>
          <NavbarToggle navbarIsOpen={navbarIsOpen}>
            <FontAwesomeIcon
              onClick={() => setNavbarIsOpen(!navbarIsOpen)}
              icon={navbarIsOpen ? faTimes : faBars}
              color={Colors.white}
              style={{
                backgroundColor: Colors.red,
                borderRadius: 2,
                padding: "5 7",
                width: 15,
                height: 15,
                cursor: "pointer",
              }}
            />
          </NavbarToggle>
        </NavbarWrapper>
        <NavbarMenu navbarIsOpen={navbarIsOpen}>
          {Object.keys(Router).map((route, key) => {
            return (
              <NavbarMenuItem key={key}>
                <NavbarMenuLink to={route}>
                  {route.charAt(0).toUpperCase() + route.slice(1).toLowerCase()}
                </NavbarMenuLink>
              </NavbarMenuItem>
            );
          })}
          <NavbarMenuItemRight>
            <ButtonLink
              title="07 83 40 61 65"
              fullWidth={true}
              border={false}
              isNavbar={true}
              link={location.pathname}
            />
          </NavbarMenuItemRight>
        </NavbarMenu>
      </Navbar>
      <HeaderContent>
        <HeaderTitle>Fred Batiment</HeaderTitle>
        <HeaderDescription>Rapide et fiable.</HeaderDescription>
        <ButtonLink title="Voir les réalisations" link={Router.realisations} />
      </HeaderContent>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-image: url("${process.env.PUBLIC_URL}/assets/images/header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const HeaderContent = styled.div`
  padding: 30px;
  @media screen and (min-width: 1024px) {
    padding: 100px;
  }
`;
const HeaderTitle = styled.h1`
  color: ${Colors.red};
  text-align: center;
  text-transform: uppercase;
  margin: 0;
`;
const HeaderDescription = styled.p`
  margin: 0;
  text-align: center;
`;
const Navbar = styled.nav`
  background-color: ${Colors.white};
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const NavbarToggle = styled.div`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavbarBrand = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
  width: 200px;
`;
const NavbarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.navbarIsOpen ? "block" : "none")};
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
const NavbarMenuItem = styled.li`
  padding: 0 20px;
  @media screen and (min-width: 1024px) {
  }
`;
const NavbarMenuLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    color: ${Colors.redHover};
  }
`;
const NavbarMenuItemRight = styled.li`
  @media screen and (min-width: 1024px) {
    margin: 0 0 0 auto;
    padding: 20px;
  }
`;
