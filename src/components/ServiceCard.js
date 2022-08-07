import React from 'react'

// styled
import styled from 'styled-components'
import { Colors } from '../utils/style/Colors';

export default function ServiceCard({data}) {
  return (
    <StyledServiceCard>
        {data.name}
    </StyledServiceCard>
  )
}

const StyledServiceCard = styled.div`
background-color: ${Colors.gray};
padding: 10px 20px;
border-radius: 5px;
box-shadow: 0px 0px 30px rgb(0 0 0 / 7%);
`;
