import React from "react";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";
import AchievementCard from "../components/AchievementCard";

// data
import { AchievementsData } from "../data/AchievementsData";

export default function AchievementsPage() {
  return (
    <StyledAchievementsPage>
      <Helmet>
        <title>Fred Batiment - Réalisations</title>
      </Helmet>
      <Achievements>
        {AchievementsData.map((achievement) => {
          return <AchievementCard key={achievement.id} data={achievement} />
        })}
      </Achievements>
    </StyledAchievementsPage>
  );
}

const StyledAchievementsPage = styled.div``;
const Achievements = styled.section``;
