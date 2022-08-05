import React, { useState } from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components'

import ButtonLink from './ButtonLink';

import { Router } from "../utils/Router";
import { Colors } from '../utils/style/Colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    return (
        <StyledHeader>
            <Navbar>
                <NavbarWrapper>
                    <NavbarBrand src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" />
                    <FontAwesomeIcon
                        onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                        icon={navbarIsOpen ? faTimes : faBars}
                        color={Colors.white}
                        style={{ backgroundColor: Colors.red, borderRadius: 2, padding: "5 7", width: 15, height: 15 }} />
                </NavbarWrapper>
                {navbarIsOpen ?
                    <NavbarMenu>
                        {Object.keys(Router).map((route, key) => {
                            return (
                                <NavbarMenuItem key={key}>
                                    <NavbarMenuLink to={route}>{route.charAt(0).toUpperCase() + route.slice(1).toLowerCase()}</NavbarMenuLink>
                                </NavbarMenuItem>
                            )
                        })}
                        <NavbarMenuItemRight>
                            <ButtonLink
                                title="Devis gratuit"
                                fullWidth={true}
                                border={false}
                                link={""} />
                        </NavbarMenuItemRight>
                    </NavbarMenu>
                    : null}
            </Navbar>
            <HeaderContent>
                <HeaderTitle>Fred Batiment</HeaderTitle>
                <HeaderDescription>Rapide et fiable.</HeaderDescription>
                <ButtonLink
                    title="Voir les réalisations"
                    link={Router.realisations} />
            </HeaderContent>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
background-image: url('${process.env.PUBLIC_URL}/assets/images/header.jpg');
background-size: cover;
background-position:center;
background-repeat: no-repeat;
`;
const HeaderContent = styled.div`
padding: 30px;
`;
const HeaderTitle = styled.h1`
color: ${Colors.red};
text-align:center;
text-transform: uppercase;
margin:0;
`;
const HeaderDescription = styled.p`
margin: 0;
text-align:center;
`;
const Navbar = styled.nav`
background-color: ${Colors.white};
position:relative;
`;
const NavbarWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding: 20px;
`;
const NavbarBrand = styled.img`
max-width: 100%;
display:block;
object-fit:cover;
width: 200px;
`;
const NavbarMenu = styled.ul`
list-style:none;
padding:0;
margin:0;
`;
const NavbarMenuItem = styled.li`
padding: 0 20px;
`;
const NavbarMenuLink = styled(Link)`
color:black;
text-decoration:none;
`;
const NavbarMenuItemRight = styled.li`
`;