import React from 'react'

import { Link } from "react-router-dom"

import styled from 'styled-components'
import { Colors } from '../utils/style/Colors';

export default function ButtonLink({ title, link, border = true, fullWidth = false, animation = false }) {
    return (
        <StyledButtonLink
            to={link}
            border={border.toString()}
            fullwidth={fullWidth.toString()}
            animation={animation.toString()}>
            {title}
        </StyledButtonLink>
    )
}

const StyledButtonLink = styled(Link)`
border-radius: ${(props) => props.border === "true" ? "100px" : null};
background-color: ${Colors.red};
color: ${Colors.white};
box-shadow: 10px 10px 60px rgb(0 0 0 / 30%);
display:block;
text-decoration:none;
padding: 5px 20px;
width: ${(props) => props.fullwidth === "false" ? "max-content" : null};
margin: 20px auto 0 auto;
transition: 0.2s;
&:hover {
    background-color: ${Colors.redHover};
    transform: ${(props) => props.animation === "true" ? "scale(1.05)" : null};
    transition: 0.2s;
}
`;
