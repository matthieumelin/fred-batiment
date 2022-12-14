import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { Colors } from "../utils/style/Colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterAbout>
          <Link to="/">
            <FooterAboutLogo
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="Logo de Fred Batiment"
              tabIndex={0}
            />
          </Link>
          <FooterAboutDescription>
            Réalisation de vos travaux à domicile dans le secteur du 62.
            <FooterBreakLine />
            Devis gratuit au 06 83 40 50 84
          </FooterAboutDescription>
        </FooterAbout>
        <FooterSections>
          <FooterSection>
            <FooterSectionTitle>Rubriques</FooterSectionTitle>
            <FooterSectionMenu>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  Réalisations
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  Préstations
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>Contact</FooterSectionMenuLink>
              </FooterSectionMenuItem>
            </FooterSectionMenu>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Informations</FooterSectionTitle>
            <FooterSectionMenu>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  Mentions légales
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
            </FooterSectionMenu>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Réseaux sociaux</FooterSectionTitle>
            <FooterSectionMenu>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
              <FooterSectionMenuItem>
                <FooterSectionMenuLink to="#" tabIndex={0}>
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </FooterSectionMenuLink>
              </FooterSectionMenuItem>
            </FooterSectionMenu>
          </FooterSection>
        </FooterSections>
      </FooterWrapper>
      <FooterCopyright>
        Copyright © 2022 Fred Batiment. Tous droits réservés. Une réalisation
        par Swizen
      </FooterCopyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${Colors.gray};
`;
const FooterWrapper = styled.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
const FooterAbout = styled.div``;
const FooterAboutLogo = styled.img`
  max-width: 100%;
  display: block;
  width: 200px;
`;
const FooterAboutDescription = styled.p`
  margin: 0;
  max-width: 320px;
`;
const FooterSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 0 0;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: auto;
  }
`;
const FooterSection = styled.section``;
const FooterSectionTitle = styled.h3`
  position: relative;
  margin: 0 0 20px 0;
  &::after {
    content: "";
    height: 3px;
    width: 30px;
    background-color: ${Colors.red};
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;
const FooterSectionMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  @media screen and (min-width: 1024px) {
    width: 200px;
  }
`;
const FooterSectionMenuItem = styled.li``;
const FooterSectionMenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  transition: 0.2s;

  &:hover {
    color: ${Colors.red};
    transition: 0.2s;
  }
`;
const FooterCopyright = styled.p`
  background-color: ${Colors.red};
  color: ${Colors.white};
  margin: 0;
  padding: 10px;
  text-align: center;
`;
const FooterBreakLine = styled.br``;