import React from "react";

// styled
import styled from "styled-components";
import { Colors } from "../utils/style/Colors";

export default function Alert({ type, message }) {
  return <StyledAlert type={type}>{message}</StyledAlert>;
}

const StyledAlert = styled.div`
  color: ${(props) =>
    props.type === "error" ? Colors.red : Colors.green};
  border-radius: 2px;
  margin: 10px 0 0 0;
`;
