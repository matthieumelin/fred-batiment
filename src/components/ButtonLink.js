import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { Colors } from "../utils/style/Colors";

export default function ButtonLink({
  title,
  link,
  uppercase = false,
  isNavbar = false,
  border = true,
  fullWidth = false,
  animation = false,
}) {
  return (
    <StyledButtonLink
      to={link}
      uppercase={uppercase.toString()}
      isnavbar={isNavbar.toString()}
      border={border.toString()}
      fullwidth={fullWidth.toString()}
      animation={animation.toString()}
    >
      {title}
    </StyledButtonLink>
  );
}

const StyledButtonLink = styled(Link)`
  border-radius: ${(props) => (props.border === "true" ? "100px" : "2px")};
  background-color: ${Colors.red};
  color: ${Colors.white};
  box-shadow: 10px 10px 60px rgb(0 0 0 / 30%);
  display: block;
  text-decoration: none;
  text-transform:${(props) => props.uppercase === "true" ? "uppercase" : null};
  padding: 5px 20px;
  width: ${(props) => (props.fullwidth === "false" ? "max-content" : null)};
  margin: 20px auto 0 auto;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.redHover};
    transform: ${(props) =>
      props.animation === "true" ? "scale(1.05)" : null};
    transition: 0.2s;
  }
  @media screen and (min-width: 1024px) {
    margin: ${(props) =>
      props.isnavbar === "true" ? "0 auto" : "20px auto 0 auto"};
  }
`;
