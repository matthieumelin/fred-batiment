import React from "react";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";

export default function AchievementsPage() {
  return (
    <StyledAchievementsPage>
      <Helmet>
        <title>Fred Batiment - Réalisations</title>
      </Helmet>
    </StyledAchievementsPage>
  );
}

const StyledAchievementsPage = styled.div``;
