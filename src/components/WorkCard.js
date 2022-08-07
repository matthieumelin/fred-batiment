import React from 'react'

// styled
import styled from 'styled-components'

// utils
import { Colors } from '../utils/style/Colors';

// components
import WorkGallery from './WorkGallery';

export default function WorkCard({ data }) {
  return (
    <StyledWorkCard>
      <WorkGallery images={data.images} />
      <WorkBody>
        {data.name}
      </WorkBody>
    </StyledWorkCard>
  )
}

const StyledWorkCard = styled.div`
`;
const WorkHeader = styled.div`
`;
const WorkBody = styled.div`
background-color: ${Colors.red};
color: ${Colors.white};
padding: 10px 20px;
border-radius: 0px 0px 5px 5px;
`;