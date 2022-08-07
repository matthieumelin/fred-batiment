import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

// styled
import styled from 'styled-components';
import { Colors } from '../utils/style/Colors';

export default function WorkGallery({ images }) {
    const [index, setIndex] = useState(0);

    const handleImage = (action) => {
        switch (action) {
            case "left":
                if (images[index] !== images[0]) {
                    setIndex(index - 1);
                } else {
                    setIndex(images.length - 1);
                } break;
            case "right":
                if (images[index] !== images[images.length - 1]) {
                    setIndex(index + 1);
                } else {
                    setIndex(0);
                }
                break;
            default:
                break;
        }
    }

    return (
        <StyledWorkGallery>
            {images.length > 1 ?
                <>
                    <WorkGalleryCount>{`${index+1}/${images.length}`}</WorkGalleryCount>
                    <WorkGalleryArrow onClick={() => handleImage("left")} side="left" icon={faArrowLeft} />
                    <WorkGalleryArrow onClick={() => handleImage("right")} side="right" icon={faArrowRight} />
                </>
                : null}
            <WorkGalleryImage src={`${process.env.PUBLIC_URL}/assets/images/works/${images[index]}`} />
        </StyledWorkGallery>
    )
}

const StyledWorkGallery = styled.div`
position:relative;
`;
const WorkGalleryArrow = styled(FontAwesomeIcon)`
color: ${Colors.white};
width: 15px;
height: 15px;
background-color: ${Colors.red};
padding: 5px;
border-radius: 100px;
position: absolute;
${(props) => `${props.side}: 20px`};
top: 50%;
transform: translateY(-50%);
transition: 0.2s;
cursor:pointer;
&:hover {
    background-color: ${Colors.redHover};
    transition: 0.2s;
}
`;
const WorkGalleryCount = styled.p`
position:absolute;
right: 0;
bottom: 0;
left: 50%;
color: ${Colors.white};
`;
const WorkGalleryImage = styled.img`
display:block;
max-width:100%;
object-fit:cover;
height: 200px;
width: 100%;
border-radius: 5px 5px 0 0;
`;