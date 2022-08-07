import React from 'react'

// styled
import styled from 'styled-components'

export default function AchievementCard({data}) {
  return (
    <StyledAchievementCard image={data.image}>
      {data.name}
    </StyledAchievementCard>
  )
}

const StyledAchievementCard = styled.div`
border-radius:5px;
background-image: url(${(props) => props.image});
`;