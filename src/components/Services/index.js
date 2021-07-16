import React from "react";
import Icon1 from "../../images/personal_finance_0DAAA3.svg";
import Icon2 from "../../images/dev_productivity_0DAAA3.svg";
import Icon3 from "../../images/security_on_0DAAA3.svg";
import Icon4 from "../../images/maintenance_0DAAA3.svg";
import Icon5 from "../../images/investing_0DAAA3.svg";
import Icon6 from "../../images/done_0DAAA3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Passive Income</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>24/7 Monitoring</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Highly Secured</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Dedicated Servers</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>High Performance</ServicesH2>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Reliable Infrastructure</ServicesH2>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
