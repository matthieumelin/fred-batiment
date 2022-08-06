import React from "react";

import styled from "styled-components";

import { Colors } from "../utils/style/Colors";

export default function Button({
  title,
  center = false,
  border = false,
  fullWidth = false,
  animation = false,
}) {
  return (
    <StyledButton
      type="submit"
      center={center.toString()}
      border={border.toString()}
      fullwidth={fullWidth.toString()}
      animation={animation.toString()}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-family: inherit;
  border: none;
  border-radius: ${(props) => (props.border === "true" ? "100px" : "2px")};
  background-color: ${Colors.red};
  color: ${Colors.white};
  box-shadow: 10px 10px 60px rgb(0 0 0 / 30%);
  text-decoration: none;
  padding: 5px 20px;
  width: ${(props) => (props.fullwidth === "false" ? "max-content" : null)};
  margin: ${(props) => (props.center === "true" ? "20px auto" : "20px 0")};
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.redHover};
    transform: ${(props) =>
      props.animation === "true" ? "scale(1.05)" : null};
    transition: 0.2s;
  }
`;
