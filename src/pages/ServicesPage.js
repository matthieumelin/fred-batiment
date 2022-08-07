import React from "react";

// helmet
import { Helmet } from "react-helmet-async";

// styled
import styled from "styled-components";
import ServiceCard from "../components/ServiceCard.js";

// data
import { ServicesData } from "../data/ServicesData";
import { Colors } from "../utils/style/Colors.js";

export default function ServicesPage() {
  return (
    <StyledServicesPage>
      <Helmet>
        <title>Fred Batiment - Services</title>
      </Helmet>
      <Services>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesContent>
          {ServicesData.map((service) => {
            return <ServiceCard key={service.id} data={service} />
          })}
        </ServicesContent>
      </Services>
    </StyledServicesPage>
  );
}

const StyledServicesPage = styled.div``;
const Services = styled.section`
margin:20px;
`;
const ServicesTitle = styled.h2`
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
}
`;
const ServicesContent = styled.div`
display:grid;
gap: 20px;

@media screen and (min-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (min-width: 1440px) {
  grid-template-columns: repeat(3, 1fr);
}
`;