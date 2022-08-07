import React from "react";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";
import WorkCard from "../components/WorkCard";

// data
import { WorksData } from "../data/WorksData";

// utils
import { Colors } from "../utils/style/Colors";

export default function WorksPage() {
  return (
    <StyledWorksPage>
      <Helmet>
        <title>Fred Batiment - Réalisations</title>
      </Helmet>
      <Works>
        <WorksTitle>Réalisations</WorksTitle>
        <WorksContent>
          {WorksData.map((work) => {
            return <WorkCard key={work.id} data={work} />
          })}
        </WorksContent>
      </Works>
    </StyledWorksPage>
  );
}

const StyledWorksPage = styled.div``;
const Works = styled.section`
margin:20px;
`;
const WorksTitle = styled.h2`
text-align:center;
position:relative;

&::after {
  content: "";
  position: absolute;
  background-color: ${Colors.red};
  height: 5px;
  width: 30px;
  left: 50%;
  bottom: -5px;
  transform: translate(-50%, -50%);
}`;
const WorksContent = styled.div`
display:grid;
gap: 20px;

@media screen and (min-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (min-width: 1440px) {
  grid-template-columns: repeat(3, 1fr);
}
`;